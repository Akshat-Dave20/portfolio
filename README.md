# 🚀 Akshat Dave - MERN Stack Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node JS" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
</p>

Welcome to my personal portfolio repository! This is a modern, premium, hacker-inspired full-stack portfolio website built using the MERN stack (MongoDB, Express, React, Node.js). 

## ✨ Features

- **Modern UI & Aesthetic:** Built with a dark hacker-style theme, glassmorphism, and custom animations for an interactive feel.
- **Frontend App:** Built using React and Vite for blazing-fast development and performance.
- **Backend API:** Scalable backend architecture built using Node.js & Express.
- **Component Based:** Highly reusable and modular React components (Navbar, Hero, About, Skills, Projects, Contact, Custom Cursor).
- **Responsive Layout:** Automatically scales and optimizes based on device screen sizes.
- **Working Contact Form:** Connects to a MongoDB database to securely store user messages sent through the interface.

## 📁 Repository Structure

```text
My Portfolio/
├── backend/            # Express.js backend server handling API and Database
│   ├── models/         # MongoDB Mongoose models (Message.js)
│   ├── routes/         # Express API routes (contact.js)
│   ├── server.js       # Main entry point for the backend
│   └── package.json    # Backend dependencies
└── frontend/           # React frontend built with Vite
    ├── public/         # Public static assets
    ├── src/
    │   ├── assets/     # Images and SVGs
    │   ├── components/ # React UI components (Hero.jsx, Projects.jsx, etc.)
    │   ├── App.jsx     # Main React App layout
    │   ├── main.jsx    # Application entry point
    │   └── index.css   # Global styling and Tailwind configuration
    ├── index.html      # Main HTML file
    ├── vite.config.js  # Vite configuration
    └── package.json    # Frontend dependencies
```

## 🛠️ Installation & Setup

To run this application locally, you will need to start both the frontend and backend servers.

### 1. Clone the repository
```bash
git clone https://github.com/Akshat-Dave20/portfolio.git
cd portfolio
```

### 2. Setup the Backend
Open a new terminal window:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and provide your MongoDB connection string:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Start the backend server:
```bash
npm run dev
# The server should run on http://localhost:5000
```

### 3. Setup the Frontend
Open another terminal window:
```bash
cd frontend
npm install
```
Start the frontend development server:
```bash
npm run dev
# The Vite app should run on http://localhost:5173
```

## 📬 Contact & Links

- **GitHub:** [@Akshat-Dave20](https://github.com/Akshat-Dave20)

<p align="center">
  <i>Built thoughtfully by Akshat Dave.</i >
</p>
