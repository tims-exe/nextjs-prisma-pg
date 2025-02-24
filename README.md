# 📝 Next.js with PostgreSQL and Prisma

This is a simple Todo application built using **Next.js**, **Prisma ORM**, and **PostgreSQL**. The app allows users to perform CRUD operations: Create, Read, Update, and Delete tasks.

---

## 🚀 Features

- Add, update, and delete todos
- Mark tasks as completed
- Uses PostgreSQL as the database
- Prisma for database interaction
- Next.js App Router

---

## 🛠️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [PostgreSQL](https://www.postgresql.org/) (local or cloud-based like [Supabase](https://supabase.io/))
- [Git](https://git-scm.com/)

---

## ⚙️ Installation and Setup

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/your-username/nextjs-todo-app.git
cd nextjs-todo-app
```

### 2️⃣ Initialize a Next.js Project

```bash
npx create-next-app@latest .
```

Choose:
- TypeScript: No (unless you want to use TypeScript)
- App Router: Yes
- Tailwind CSS: Yes (Optional)
- ESLint: Yes
- src directory: No
- Import alias: Yes (Optional)

### 3️⃣ Install Required Dependencies

```bash
npm install @prisma/client prisma axios
```

### 4️⃣ Set Up PostgreSQL Database

```bash
# Login to PostgreSQL
psql -U postgres

# Create a new database
CREATE DATABASE nextjs_todo;

# Exit the PostgreSQL CLI
\q
```

📝 Update .env File

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/todo_app?schema=public"
```

Replace:
- username: Your PostgreSQL username (e.g., postgres)
- password: Your PostgreSQL password
- todo_app: Your database name

### After defining ORM Schema

### 6️⃣ Run Prisma Migrations

```bash
npx prisma migrate dev --name init
```

Generate the Prisma client:

```bash
npx prisma generate
```

Web Interface to check Database

```bash
npx prisma studio
```

### 7️⃣ Set Up API Routes
```bash
/app
  /api
    /todos
      route.js
      /[id]
        route.js

```

### 8️⃣ Create Components & Update page.js to Use Components

### 9️⃣ Run Your Application

```bash
npm run dev
```
