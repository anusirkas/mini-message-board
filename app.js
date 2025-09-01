const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Avatar colors global (available in every view)
app.locals.avatarColors = [
  "#4f46e5",
  "#16a34a",
  "#dc2626",
  "#9333ea",
  "#eab308",
  "#0ea5e9",
  "#f97316"
];

// Mongo connection
const { ObjectId } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URI);

async function start() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    app.locals.db = client.db(process.env.DB_NAME);

    // Routes
    app.use('/', indexRouter);

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

start();
