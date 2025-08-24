const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// GET home page
router.get('/', (req, res) => {
  res.render('index', { title: "Mini Message Board", messages });
});

// GET form page
router.get('/new', (req, res) => {
  res.render('form', { title: "New Message" });
});

// POST form submission
router.post('/new', (req, res) => {
  const messageUser = req.body.user;
  const messageText = req.body.text;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
