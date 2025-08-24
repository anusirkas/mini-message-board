const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

// GET home page
router.get('/', async (req, res) => {
  const db = req.app.locals.db;
  const messages = await db.collection('messages').find().sort({ added: 1 }).toArray();
  res.render('index', { title: "Mini Message Board", messages });
});

// GET form page
router.get('/new', (req, res) => {
  res.render('form', { title: "New Message" });
});

// POST form submission
router.post('/new', async (req, res) => {
  const db = req.app.locals.db;
  const newMsg = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  };
  await db.collection('messages').insertOne(newMsg);
  res.redirect('/');
});

// GET üksiku sõnumi detailid
router.get('/message/:id', async (req, res) => {
  const db = req.app.locals.db;
  try {
    const message = await db.collection('messages').findOne({ _id: new ObjectId(req.params.id) });
    if (!message) return res.status(404).send("Message not found");
    res.render('message', { title: "Message Detail", message });
  } catch (err) {
    res.status(400).send("Invalid message ID");
  }
});

module.exports = router;
