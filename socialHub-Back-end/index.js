const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Run the server for test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connect to MongoDB
const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.heig7t2.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Collections
let usersCollection;
let postsCollection;

// Middleware to set up the usersCollection before handling requests
app.use(async (req, res, next) => {
  try {
    usersCollection = req.app.locals.usersCollection;
    postsCollection = req.app.locals.postsCollection;
    next();
  } catch (error) {
    console.error("Middleware error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ---------------------------- get all data ----------------------------
app.get("/all-posts", async (req, res) => {
  try {
    const allPosts = await postsCollection.find({}).toArray();
    res.json(allPosts);
  } catch (error) {
    console.error("Error fetching all posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ---------------------------- Route ----------------------------
const registrationRoute = require("./routes/registration");
const loginRoute = require("./routes/login");
const articleRoute = require("./routes/article");
const noticeRoute = require("./routes/notice");
const classRoute = require("./routes/class");
const videoRoute = require("./routes/video");
const eventRoute = require("./routes/event");
const photoRoute = require("./routes/photo");
const bookRoute = require("./routes/book");

// registration and login
app.use("/registration", registrationRoute);
app.use("/login", loginRoute);

// Posts
app.use("/article", articleRoute);
app.use("/notice", noticeRoute);
app.use("/class", classRoute);
app.use("/video", videoRoute);
app.use("/event", eventRoute);
app.use("/photo", photoRoute);
app.use("/book", bookRoute);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Assign the collection after connecting
    usersCollection = client.db("SocialHub").collection("Users");
    postsCollection = client.db("SocialHub").collection("Posts");

    app.locals.usersCollection = usersCollection;
    app.locals.postsCollection = postsCollection;

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

run().catch(console.dir);
