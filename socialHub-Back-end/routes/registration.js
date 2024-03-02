const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const usersCollection = req.app.locals.usersCollection;

  try {
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    await usersCollection.insertOne({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
