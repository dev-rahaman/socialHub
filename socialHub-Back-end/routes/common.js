const express = require("express");
const router = express.Router();

router.get("/:category", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;

  try {
    const category = req.params?.category;
    if (category) {
      query = { category: category };
    }
    const articles = await postsCollection.find(query).toArray();
    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error while fetching articles" });
  }
});

module.exports = router;
