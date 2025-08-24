const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Middleware: et lugeda POST body andmeid
app.use(express.urlencoded({ extended: true }));

// Vaadete seadistus
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route kasutusele
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
