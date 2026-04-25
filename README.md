# 🚀 2Do - Real-time Task Management App

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)

A premium, real-time task management application designed for modern efficiency. **2Do** provides a seamless, collaborative experience with a sleek UI inspired by high-end music applications.

---

## 📸 Screenshots

| Desktop Dashboard | Mobile Navigation |
|:------------------:|:------------------:|
| <img src="https://github.com/user-attachments/assets/456ac853-7135-422d-acdd-1369290a5870" width="100%" /> | <img src="https://github.com/user-attachments/assets/5af2eac9-263d-4ff7-99f3-8ac1c9d29d15" width="280" /> |

---

## 🚀 Features

- **⚡ Real-time Updates**: Instant task synchronization across all devices using Socket.io.
- **📱 Premium Mobile UI**: A unique, music-app inspired bottom navigation bar with a curved floating action button.
- **🔐 Secure Authentication**: Robust user registration and login system with JWT protection.
- **🛠️ Task Management**: Create, edit, toggle, and delete tasks with instant feedback.
- **👤 Profile Management**: Personalized user profiles with logout capabilities on both desktop and mobile.
- **🖥️ Responsive Layout**: Optimized for Desktop, Tablet (768px+), and Mobile devices.

---

## 🛠 Tech Stack

**Frontend:**
- React.js (Vite)
- Zustand (State Management)
- Lucide React (Icons)
- CSS3 (Vanilla / Modern Flexbox & Grid)
- Socket.io Client

**Backend:**
- Node.js & Express
- MongoDB & Mongoose
- Socket.io (Real-time events)
- JSON Web Tokens (Auth)
- Bcrypt (Encryption)

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/fahadvm/2do.git
cd 2do
```

### 2. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_super_secret_key
```
Start the backend:
```bash
npm start
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```
Start the frontend:
```bash
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| POST | `/api/signup` | Register a new user | No |
| POST | `/api/login` | Login existing user | No |
| GET | `/api/todos` | Fetch all user tasks | Yes |
| POST | `/api/todos` | Create a new task | Yes |
| PUT | `/api/todos/:id` | Update task status/content | Yes |
| DELETE | `/api/todos/:id` | Remove a task | Yes |

---

## 📁 Folder Structure

```
2do/
├── backend/            # Express Server
│   ├── src/            # Source code
│   │   ├── controllers/# Route logic
│   │   ├── models/     # Database schemas
│   │   ├── routes/     # API routes
│   │   └── index.js    # Entry point
│   └── .env            # Environment variables
├── frontend/           # React App
│   ├── src/
│   │   ├── api/        # Axios configuration
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Main application views
│   │   ├── store/      # Zustand state management
│   │   └── App.jsx     # Main entry component
│   └── .env            # Environment variables
└── README.md
```

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🚀 Deployment

The project is configured for deployment on **Vercel** (Frontend) and any Node.js host like **Render** or **Heroku** (Backend).

**Frontend Vercel Config:**
Includes `vercel.json` for SPA routing to prevent 404s on page refresh.

---

**Developed with ❤️ by Fahad**
