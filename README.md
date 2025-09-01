# 📨 Mini Message Board

A modern chat-style message board built with **Node.js**, **Express**, **EJS**, and **MongoDB Atlas**.  
Deployed live on **Render**: 👉 [Mini Message Board Live](https://mini-message-board-b2bg.onrender.com/)

---

## 🚀 Features

- 📩 Post and view messages in real time board style
- 👤 Dynamic avatar colors based on username initials
- 💬 Chat bubble UI with smooth layout
- 😀 Emoji picker in the message form
- 🌙 Day/Night mode toggle (persists with localStorage)
- 📅 Human-friendly timestamps (`Aug 26, 2025, 19:35`)
- 🎨 Consistent modern design across all pages (`/`, `/new`, and message detail view)
- 🗄️ Messages stored in **MongoDB Atlas** (persistent storage)
- ☁️ Deployed to **Render**

---

## 📂 Project Structure

```
mini-message-board/
├─ app.js
├─ routes/
│ └─ index.js
├─ views/
│ ├─ index.ejs # Home - shows messages
│ ├─ form.ejs # Form to add new message
│ └─ message.ejs # Single message view
├─ public/
│ ├─ styles.css # Styling
│ └─ theme.js # Dark/Light mode logic
├─ package.json
├─ README.md
```

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Templating:** EJS
- **Database:** MongoDB Atlas
- **Styling:** CSS + modern chat UI patterns
- **Deployment:** Render (connected via GitHub repo)

---

## ⚡ Run Locally

```bash
# 1. Clone repository
git clone https://github.com/USERNAME/mini-message-board.git
cd mini-message-board

# 2. Install dependencies
npm install

# 3. Set up environment variables (.env)
MONGODB_URI=your-mongodb-connection-string
DB_NAME=mini_message_board

# 4. Start server
node app.js
