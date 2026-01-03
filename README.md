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
└── app.js               # Main entry point
