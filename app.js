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

// Avatar värvid globaalseks (saadaval igas vaates)
app.locals.avatarColors = [
  "#4f46e5", // sinine
  "#16a34a", // roheline
  "#dc2626", // punane
  "#9333ea", // lilla
  "#eab308", // kollane
  "#0ea5e9", // helesinine
  "#f97316"  // oranž
];

// --- Mongo ühendus ---
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
