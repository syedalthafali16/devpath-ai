# 🚀 DevPath AI

An AI-powered full-stack web application that helps developers plan their learning journey by generating personalized roadmaps, analyzing skill gaps, and providing AI-powered project guidance.

## 🌐 Live Demo

Frontend:
 https://devpath-ai-app.vercel.app

Backend API:
 https://devpath-ai.onrender.com

---

## ✨ Features

- 🔐 JWT Authentication (Register/Login)
- 👤 User Profile Management
- 📊 Interactive Dashboard
- 🛣️ AI-Powered Learning Roadmaps
- 🧠 AI Project Mentor
- 📈 Skill Gap Analysis
- 📱 Fully Responsive Design
- 🌙 Modern Glassmorphism UI
- 🔒 Protected Routes
- ☁️ Production Deployment

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React

### Backend
- Python
- Django
- Django REST Framework
- JWT Authentication (SimpleJWT)
- Google Gemini API

### Database
- PostgreSQL (Neon)

### Deployment
- Vercel
- Render

### Tools
- Git
- GitHub
- Thunder Client
- VS Code

---

## 📂 Project Structure

```
DevPath-AI
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── users
│   ├── roadmap
│   ├── mentor
│   ├── config
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/devpath-ai.git
cd devpath-ai
```

---

### Backend Setup

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
```

Windows

```bash
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Start server

```bash
python manage.py runserver
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
SECRET_KEY=your_secret_key

DEBUG=True

DATABASE_URL=your_database_url

GEMINI_API_KEY=your_gemini_api_key

ALLOWED_HOSTS=localhost,127.0.0.1
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/users/register/
POST /api/users/login/
POST /api/users/refresh/
GET  /api/users/me/
```

### Dashboard

```
GET /api/users/dashboard/
```

### Roadmap

```
POST /api/roadmap/generate/
```

### AI Mentor

```
POST /api/mentor/chat/
```

---

## 🎯 Skills Demonstrated

- Full Stack Development
- REST API Development
- JWT Authentication
- AI Integration
- PostgreSQL Database Design
- Responsive UI Development
- Cloud Deployment
- API Testing
- Git Version Control

---

## 🚀 Future Enhancements

- Save AI Chat History
- User Progress Tracking
- Resume Analyzer
- AI Mock Interview
- Roadmap Progress Analytics
- Dark/Light Theme
- Admin Dashboard

---

## 👨‍💻 Author

**Syed Althaf Ali**

GitHub: https://github.com/syedalthafali16

LinkedIn: (Add your LinkedIn profile)

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.