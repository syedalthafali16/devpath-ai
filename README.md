# 🚀 DevPath AI

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)

![DRF](https://img.shields.io/badge/Django_REST_Framework-ff1709?style=for-the-badge&logo=django&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

![Gemini AI](https://img.shields.io/badge/Google_Gemini_AI-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white)

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

![Neon](https://img.shields.io/badge/Neon-00E599?style=for-the-badge&logo=neon&logoColor=black)

![License](https://img.shields.io/github/license/syedalthafali16/devpath-ai?style=for-the-badge)

![Stars](https://img.shields.io/github/stars/syedalthafali16/devpath-ai?style=for-the-badge)

![Forks](https://img.shields.io/github/forks/syedalthafali16/devpath-ai?style=for-the-badge)

![Issues](https://img.shields.io/github/issues/syedalthafali16/devpath-ai?style=for-the-badge)

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
- Thunder Client (API Test )
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
- API Testing ( Thunder client )
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

LinkedIn:
https://www.linkedin.com/in/syedalthafali16

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.