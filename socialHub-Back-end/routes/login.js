const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const usersCollection = req.app.locals.usersCollection;
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });

    if (user.password === password) {
      res
        .status(201)
        .json({ success: true, message: "Account Login Successfully" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid Password or Email " });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
