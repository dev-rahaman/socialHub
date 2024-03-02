const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;
  const { userEmail, video, title, description, thumbnail, tags } = req.body;

  const currentTime = new Date();

  try {
    await postsCollection.insertOne({
      userEmail,
      video,
      title,
      description,
      thumbnail,
      tags,
      category: "event",
      time: currentTime,
    });

    res.status(201).json({ message: "You'r Event Posted Successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server to Post Your Event" });
  }
});

router.get("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;

  try {
    const classes = await postsCollection.find({ category: "event" }).toArray();
    res.status(200).json(classes);
  } catch (error) {
    console.error("Error fetching event:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error while fetching event" });
  }
});
module.exports = router;
