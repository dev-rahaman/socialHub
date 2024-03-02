const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;
  const { userEmail, title, photo, value, tags } = req.body;
  const currentTime = new Date();

  try {
    await postsCollection.insertOne({
      userEmail,
      title,
      photo,
      value,
      tags,
      category: "article",
      time: currentTime,
    });

    res.status(201).json({ message: "You'r Article Posted Successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server to Post Your Article" });
  }
});

router.get("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;

  try {
    const articles = await postsCollection
      .find({ category: "article" })
      .toArray();
    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error while fetching articles" });
  }
});

module.exports = router;
