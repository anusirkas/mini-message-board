# Mini Message Board

This is a simple Node.js + Express project built as part of [The Odin Project](https://www.theodinproject.com/) NodeJS course.

## Features
- Express server with EJS templates
- Two main routes:
  - `/` → shows all messages
  - `/new` → form to add a new message
- Each message has:
  - Author
  - Text
  - Timestamp
- Ability to click "Open" to view a single message on its own page
- Basic CSS styling

## Project structure
mini-message-board/
├─ app.js
├─ routes/
│ └─ index.js
├─ views/
│ ├─ index.ejs
│ ├─ form.ejs
│ └─ message.ejs
├─ public/
│ └─ styles.css
├─ package.json
├─ package-lock.json

## Run locally
```bash
npm install
node app.js
Then open http://localhost:3000 in your browser.

Credits
Built with Node.js, Express, and EJS
Part of The Odin Project NodeJS curriculum