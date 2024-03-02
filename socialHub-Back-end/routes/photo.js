const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;
  const { content } = req.body;

  const currentTime = new Date();

  try {
    await postsCollection.insertOne({
      content,
      category: "photo",
      time: currentTime,
    });

    res.status(201).json({ message: "You'r Photo Posted Successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server to Post Your Photo" });
  }
});

router.get("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;

  try {
    const classes = await postsCollection.find().toArray();
    res.status(200).json(classes);
  } catch (error) {
    console.error("Error fetching event:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error while fetching event" });
  }
});

module.exports = router;
