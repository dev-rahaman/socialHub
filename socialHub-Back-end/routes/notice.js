const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;
  const {
    userEmail,
    principalName,
    description,
    schoolPlace,
    schoolSeal,
    noticeDate,
    noticeNo,
    schoolWebsite,
    schoolEstablish,
    tags,
  } = req.body;

  const currentTime = new Date();

  try {
    await postsCollection.insertOne({
      userEmail,
      principalName,
      description,
      schoolPlace,
      schoolSeal,
      noticeDate,
      noticeNo,
      schoolWebsite,
      schoolEstablish,
      tags,
      category: "notice",
      time: currentTime,
    });

    res.status(201).json({ message: "You'r Notice Posted Successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server to Post Your Notice" });
  }
});

router.get("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;

  try {
    const notice = await postsCollection.find({ category: "notice" }).toArray();

    res.status(200).json(notice);
  } catch (error) {
    console.error("Error fetching notice:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error when fetching notice" });
  }
});

module.exports = router;
