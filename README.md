# 🏏 Sports & Casino Platform - Backend API
(Frontend will be done by EOD - 4 January 2026 )
This is the backend server for the Sports & Casino Games Platform. It provides a RESTful API for user authentication, fetching game data with filters, and managing user favorites.

Built with **Node.js**, **Express**, and **PostgreSQL (Neon.tech)**.

---

##  Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (Cloud-hosted on Neon.tech )
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** Bcrypt (Password Hashing), CORS

---
### LOGIN MOCK CREDENTIALS (as we have only created frontend of Login not register )
`{  "email": "kashif@gmail.com", "password": "987" }`

##  API Endpoints List

###  Authentication

| Method | Endpoint | Description | Request Body Example |
| --- | --- | --- | --- |
| **POST** | `/auth/register` | Register a new user | `{ "name": "John", "email": "john@test.com", "password": "123" }` |
| **POST** | `/auth/login` | Login and receive a JWT | `{ "email": "john@test.com", "password": "123" }` |

###  Games / Matches

*Requires `Authorization: Bearer <TOKEN>` header*

| Method | Endpoint | Description | Query Params |
| --- | --- | --- | --- |
| **GET** | `/games` | Fetch all games | None |
| **GET** | `/games?filter=Cricket` | Filter games by Category or Provider | `?filter=value` |

###  Favorites

*Requires `Authorization: Bearer <TOKEN>` header*

| Method | Endpoint | Description |
| --- | --- | --- |
| **GET** | `/favorites` | Get a list of IDs for games the user has favorited |
| **POST** | `/favorites/:gameId` | Add a game to the user's favorites |
| **DELETE** | `/favorites/:gameId` | Remove a game from the user's favorites |

---



## 🚀 Setup Instructions

Follow these steps to get the backend running locally.

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v14 or higher)
* npm (Node Package Manager)
* A PostgreSQL database URL (Local or [Neon.tech](https://neon.tech))

### 2. Installation
Clone the repository and install the dependencies:

```bash
cd server
npm install

```

### 3. Environment Variables

Create a `.env` file in the root of the `server` directory. You can copy the example file:

```bash
cp .env.example .env

```

Open `.env` and fill in your details:

```env
PORT=5000
DATABASE_URL=your_postgres_connection_string_here
JWT_SECRET=your_super_secret_key

```

### 4. Database Initialization

Before running the server, you must create the necessary tables. Run the following SQL commands in your database (via  Neon SQL Editor):

```sql
-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create Games Table
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50),
    league_or_provider VARCHAR(100),
    start_time TIMESTAMP,
    description TEXT,
    tags TEXT[]
);

-- Create Favorites Table
CREATE TABLE IF NOT EXISTS favorites (
    user_id INT REFERENCES users(id),
    game_id INT REFERENCES games(id),
    PRIMARY KEY (user_id, game_id)
);

```
### 5. Run the Backend Server using nodemon

```
nodemon server.js

```


##  Project Structure

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
└── server.js               # Main entry point



---

```markdown
#  Mini Sports & Casino Platform (Frontend)


##  Tech Stack

* **Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM (v6)
* **State Management:** React Context API
* **HTTP Client:** Axios
* **Icons:** Lucide React

---

##  Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites
Make sure you have **Node.js** (v16 or higher) installed.

### 2. Installation

Clone the repository and navigate to the client folder:

```bash
cd client
npm install

```

### 3. Environment Setup (Optional but Recommended)

By default, the app connects to `http://localhost:5000/api`.
To change this, create a `.env` file in the root of the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api

```

*Note: If you skip this, ensure `src/services/api.js` points to your correct backend URL.*

### 4. Run the App

Start the development server:

```bash
npm run dev

```

Open your browser and navigate to `http://localhost:5173`.

---

## 📂 Project Structure

```text
src/
├── components/     
│   ├── Navbar.jsx   
│   ├── GameCard.jsx  
│   ├── FilterBar.jsx 
│   
├── context/
│   └── AuthContext.jsx 
├── pages/
│   ├── Dashboard.jsx   
│   ├── Login.jsx
│   └── Register.jsx    
├── services/
│   └── api.js          
├── App.jsx             
└── main.jsx            

```

---

## ✨ Key Features

1. **User Authentication:**
* Secure Login & Registration forms.
* JWT Token handling (stored in LocalStorage).
* Auto-redirects for unauthenticated users (Protected Routes).


2. **Dashboard & Filtering:**
* View all available Sports matches and Casino games.
* **Filter System:** Instantly filter by categories like "Cricket", "Football", "Slots", etc.
* Optimized performance: Filters do not re-fetch favorites unnecessarily.


3. **Favorites System:**
* **Heart Button:** Click to add/remove games from favorites.
* **Optimistic UI:** The UI updates instantly (turns blue/filled) before the API response confirms, making the app feel incredibly fast.
* Favorites persist across page reloads.



---

## 📦 Dependencies

| Package | Purpose |
| --- | --- |
| `axios` | Handling API requests (GET, POST, DELETE) |
| `react-router-dom` | Navigation between Login, Register, and Dashboard |
| `lucide-react` | Beautiful, lightweight icons (Heart, Logout, etc.) |
| `tailwindcss` | Utility-first CSS framework for styling |

---

