# 🌸 Aesthetic Haven — MERN Authentication App

---

## 🌐 Live Demo
https://aesthetic-haven.vercel.app/

---

## 📖 Project Overview
A simple full-stack authentication app built with **MongoDB, Express, React, and Node.js (MERN)**.  
Users can **register**, **log in**, and are redirected to the main app page after successful authentication.

---
##Color System

-Primary: #EC4899 (Pink) – Used for highlights, buttons, and emphasis

-Secondary: #4F46E5 (Indigo) – Used for headings and main text

-Background: #F3F4F6 (Gray-100) – Used for clean, neutral backgrounds

-Accent: #FFFFFF (White) – Used for cards, modals, and sections

---

## 🛠 Design Decisions

### Layout Adherence
- Used Tailwind spacing utilities (`p-6`, `m-8`, `gap-6`) to maintain consistent padding and margins  
- Figma used for measuring spacing and ensuring responsive design alignment  
---

### Creative Departures
- Dashboard content designed to be minimal yet informative  
- Brand positioning emphasizes elegance and simplicity  
- Medium (MD) breakpoints prioritized mobile-first layout with flexible grid components  

---

## 🧩 Component Architecture
- **Header.jsx:** Persistent navigation across all pages  
- **Dashboard.jsx:** Main dashboard layout with sidebar and content  
- **Stats.jsx:** Reusable stats cards for displaying key metrics  
- **Footer.jsx:** Reusable footer component  
- Components designed to be modular and easily reusable across multiple pages  

---

## ⚡ Performance Optimizations
- Lazy loading components where necessary  
- Tailwind utility classes to avoid extra CSS bloat  
- Minimized image sizes for faster page load  

---

## 🚀 Features

- 🔐 Secure password hashing with **bcryptjs**
- 🔑 JWT-based authentication (tokens stored in `localStorage`)
- 💬 Real-time feedback for login/register success or errors
- 🎨 Modern responsive UI built with **Tailwind CSS**
- ⚡ Auto-redirect to main app after successful login
- 🧭 React Router-based navigation
- 🧱 Clean and modular folder structure

---

## 🗂️ Project Structure

```
aesthetic-haven/
│
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Stats.jsx
│   │   ├── AuthForm.jsx
│   │   ├── About.jsx
│   │   ├── NewInStore.jsx
│   │   ├── AllProducts.jsx
│   │   └── AimSection.jsx
│   │
│   ├── pages/               # Full pages or views
│   │   ├── Dashboard.jsx
│   │   
│   │
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point for Vite
│   ├── index.css            # Tailwind imports + global styles
│   └── public/              # Images, icons, fonts
│
├── .env                     # Environment variables
├── .gitignore               # Ignore node_modules, .env, etc.
├── package.json
├── tailwind.config.js
└── vite.config.js
|__README.md
```

---

## ⚙️ Installation

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/aesthetic-haven.git
cd aesthetic-haven
```

### 2. Install dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

---

## 🔧 Configuration

### Environment Variables (Backend)

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/aesthetic-haven
SECRET_KEY=AestheticHavenSecret2025
CORS_ORIGIN=http://localhost:5173
```

### Environment Variables (Frontend)

Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Running the App

### Start the backend
```bash
cd backend
npm start
```

You should see:
```
Server running on http://localhost:5000
MongoDB Connected
```

### Start the frontend
```bash
cd frontend
npm run dev
```

Visit the app at 👉 [http://localhost:5173](http://localhost:5173)

---

## 💻 Usage

1. **Register** a new account via `/auth` or `/register` page.
2. **Login** using your credentials.
3. On successful login, the app shows “Login successful!” and redirects automatically to the main page (`App.jsx`).
4. The token is stored in `localStorage` for session persistence.

---

## 🔒 Security Notes

- Never expose secrets (like `SECRET_KEY` or DB credentials) in code.
- Move all secrets to `.env` files (not committed to GitHub).
- For production, use HTTPS and `httpOnly` cookies instead of `localStorage`.

---

## 🧩 Tech Stack

**Frontend:**
- React 18
- React Router DOM
- Axios
- Tailwind CSS

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- cors

---
##Challenges & Solutions

1.Tailwind not applying colors – Fixed by checking 
tailwind.config.js and restarting Vite server

2.Navigation links not routing – Solved by using Link from 
react-router-dom and matching paths exactly

3.Environment variables exposed – Fixed by creating .env file and 
adding it to .gitignore

---

##  Future Enhancements

-  Add logout functionality
-  Add password reset & email verification
-  Use httpOnly cookies instead of localStorage
-  Deploy backend on Render / Railway
-  Deploy frontend on Netlify / Vercel

---

##  License

MIT License © 2025 — Weddy

---

###  Credits

Built with love & coffee ☕ by Weddy.  
Inspired by simplicity, designed for Aesthetic Haven 🌸
