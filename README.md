# Community Forum Web Application

A full-stack community forum web application built with React, Node.js, Express, and PostgreSQL. Users can register, create forums, post comments, and interact in real time.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Material UI (MUI)
- Axios
- React Router

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

---

## 📦 Features

- User registration and login with JWT
- Create, list, and view forums
- Add and display comments
- Clean UI using Material UI
- Protected routes with token-based access

---

## 📁 Project Structure

/client => React frontend /server => Express backend


### 1. Clone the Repository


git clone https://github.com/your-username/community-forum.git
cd community-forum
🔧 Backend Setup (/server)

1. Install Dependencies

cd server
npm install

2. Create a .env File
Inside the /server folder, create a .env file and add the following:

DATABASE_URL="postgresql://<DB_USER>:<DB_PASSWORD>@localhost:5432/<DB_NAME>"
JWT_SECRET="your_jwt_secret_key"

Replace <DB_USER>, <DB_PASSWORD>, and <DB_NAME> with your PostgreSQL credentials and database name.

3. Set Up Prisma

npx prisma generate
npx prisma migrate dev --name init

4. Run the Backend

npm run dev
The backend will start on http://localhost:5000.

🎨 Frontend Setup (/client)

1. Install Dependencies

cd ../client
npm install

2. Run the Frontend

npm start

The frontend will start on http://localhost:3000.
