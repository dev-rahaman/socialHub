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
      category: "video",
      time: currentTime,
    });

    res.status(201).json({ message: "You'r video Posted Successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server to Post Your video" });
  }
});

router.get("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;

  try {
    const videos = await postsCollection.find({ category: "video" }).toArray();

    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching video:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error while fetching video" });
  }
});

module.exports = router;
