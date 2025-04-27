# 📱 Tchap App

A modern social networking platform built with:

- **Next.js 15** (App Router, Server Actions)
- **Clerk** (Authentication & User Management)
- **Prisma ORM** + **PostgreSQL (Neon)** (Database)
- **TailwindCSS** + **Shadcn UI** (Beautiful, responsive UI components)

---

## ✨ Features

- **Authentication**: Sign up, sign in, and secure sessions using Clerk.
- **Post Creation**: Share text and image posts instantly.
- **Like System**: Like and unlike posts in real-time.
- **Commenting**: Engage in conversations with threaded comments.
- **Follow / Unfollow**: Build your own network of friends.
- **Notifications**: Get notified about likes, follows, and comments.
- **Real-time UI**: Fast, dynamic interactions using modern Next.js patterns.
- **Fully Responsive**: Mobile-first and desktop-friendly.
- **Server Actions**: Efficient data mutations without extra API routes.

---

## 🛠️ Tech Stack

| Tech | Purpose |
|:----|:--------|
| **Next.js** | Fullstack React Framework |
| **Clerk** | Auth, sessions, user profile management |
| **PostgreSQL** | Relational database |
| **Neon.tech** | Serverless Postgres hosting |
| **Prisma ORM** | Type-safe database queries |
| **TailwindCSS** | Utility-first CSS styling |
| **Shadcn UI** | Pre-built, customizable UI components |
| **Vercel** | Deployment platform |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Eric-Tchindje/tchap-app.git
cd tchap-app

## 🛠️ Getting Started

1. Set up environment variables
Create a .env file at the root of the project:

```bash 
DATABASE_URL=your_neon_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/



### 2. Install dependencies

```bash
npm install
npm run dev



