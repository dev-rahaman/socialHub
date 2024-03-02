const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;
  const {
    userEmail,
    bookFile,
    bookCover,
    bookName,
    bookAuthor,
    bookCategory,
    bookPrice,
    bookPages,
    originalPublisher,
    bookTitle,
    bookLanguage,
    bookDescription,
    bookAudio,
    tags,
  } = req.body;
  const currentTime = new Date();

  try {
    await postsCollection.insertOne({
      userEmail,
      bookFile,
      bookCover,
      bookName,
      bookAuthor,
      bookCategory,
      bookPrice,
      bookPages,
      originalPublisher,
      bookTitle,
      bookLanguage,
      bookDescription,
      bookAudio,
      tags,
      category: "book",
      time: currentTime,
    });

    res.status(201).json({ message: "You'r book Posted Successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server to Post Your book" });
  }
});

router.get("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;

  try {
    const books = await postsCollection.find({ category: "book" }).toArray();

    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error while fetching books" });
  }
});

module.exports = router;
