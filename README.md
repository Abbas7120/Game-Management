# 🏏 Sports & Casino Platform - Backend API
(Frontend will be done by EOD - 4 January 2026 )
This is the backend server for the Sports & Casino Games Platform. It provides a RESTful API for user authentication, fetching game data with filters, and managing user favorites.

Built with **Node.js**, **Express**, and **PostgreSQL (Neon.tech)**.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (Cloud-hosted on Neon.tech )
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** Bcrypt (Password Hashing), CORS

---

## 📂 Project Structure

```text
server/
├── config/
│   └── db.js            # Database connection logic
├── controllers/         # Business logic for requests
│   ├── authController.js
│   ├── gameController.js
│   └── favController.js
├── middleware/
│   └── authMiddleware.js # Protects private routes
├── routes/              # API Endpoints
│   ├── authRoutes.js
│   ├── gameRoutes.js
│   └── favRoutes.js
├── .env                 # Environment variables (GitIgnored)
└── app.js               # Main entry point
