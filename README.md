# Mini Message Board

This is a simple Node.js + Express project built as part of [The Odin Project](https://www.theodinproject.com/) NodeJS course.

## Features

**Core features:**
- Express server with EJS templates
- Two main routes:
  - `/` → shows all messages
  - `/new` → form to add a new message
- Each message has:
  - Author
  - Text
  - Timestamp
- Ability to click "Open" to view a single message on its own page

**Enhanced UI/UX:**
- 💬 Real-time style chat board with message bubbles
- 👤 Dynamic avatar colors generated per user
- ✨ Floating “Send message” button with animation
- 😀 Emoji picker integrated into the new message form
- 🌙 Day/Night mode toggle (saves preference in localStorage)
- 📅 Improved human-friendly timestamps (e.g. Aug 24, 2025, 20:13)
- 🎨 Consistent modern UI across all pages (index, new, message)

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

## Credits
Built with Node.js, Express, and EJS
Part of The Odin Project JavaScript/NodeJS curriculum

## Run locally
```bash
npm install
node app.js
Then open http://localhost:3000 in your browser.