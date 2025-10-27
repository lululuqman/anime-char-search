# ⚡ Anime Character Select ⚡

> A 90s-inspired **retro-futuristic anime character search app** powered by the [Jikan API](https://docs.api.jikan.moe/).  
> Search your favorite anime characters and view their appearances 🎮✨

---

## 🕹️ Demo
🔗 **Live App:** [https://anime-char-search.vercel.app](https://anime-char-search.vercel.app)  
*(Deployed with Vercel)*

![Character Select Preview](https://github.com/your-username/anime-char-search/assets/preview.gif)

---

## 💾 Features

✅ **Real-time Character Search** — Powered by the Jikan API  
✅ **Retro 90s Game UI** — CRT glow, neon lights, pixel fonts  
✅ **Responsive Grid Layout** — 4 characters per row  
✅ **Dynamic Character Modal** — Shows image, aliases, and anime appearances  

---

## 🧰 Tech Stack

| Tech | Description |
|------|--------------|
| ⚛️ **React** | Frontend framework |
| 🎨 **CSS** | Custom 90s game-inspired design |
| 🌐 **Jikan API** | Anime character data from MyAnimeList |
| 🚀 **Vercel** | Deployment and hosting |
| 💾 **Local Storage** | (via hook) Save favorites locally |

---

## 🧩 Project Structure

anime-char-search/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CharacterModal.jsx
│   │   │   └── CharacterCard.jsx
│   │   ├── hooks/
│   │   │   └── useFavorites.js
│   │   ├── styles/
│   │   │   ├── CharacterSelect.css
│   │   │   └── CharacterModal.css
│   │   └── App.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/anime-char-search.git
cd anime-char-search/Frontend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run locally
bash
Copy code
npm run dev
4️⃣ Build for production
bash
Copy code
npm run build
5️⃣ Deploy (Vercel)
bash
Copy code
vercel --prod
⚙️ Make sure your root directory is set to Frontend/ in Vercel project settings.

🌈 Screenshots
Character Select Screen
<img width="1364" height="835" alt="Screenshot 2025-10-28 021247" src="https://github.com/user-attachments/assets/9d82cbf5-5164-477a-90d2-1b0eba11eaa3" />

Character Modal
<img width="1186" height="775" alt="Screenshot 2025-10-28 021301" src="https://github.com/user-attachments/assets/3bc7fbea-5f6e-485a-b067-b8d915bb7b2f" />


🪩 Retro Design Inspiration
Neon blue & magenta palette

CRT scanline overlay

“Press Start 2P” pixel font

Arcade-style glowing borders

🧠 API Reference
Using the public Jikan API:

bash
Copy code
GET https://api.jikan.moe/v4/characters?q={query}&limit=12
💖 Credits
Jikan API — for anime character data

Google Fonts — for the retro pixel font


