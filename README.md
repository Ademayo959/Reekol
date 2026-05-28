# Reekol

Reekol is a student tutorial platform built to make learning on campus easier, more organized and more community-driven.

The idea came from something I noticed in school: tutorials happen everywhere, but information about them is usually scattered across WhatsApp groups, flyers, statuses and random messages. Sometimes you find out too late, sometimes you don't even know who teaches best for a course.

Reekol is my attempt at solving that.

Students can:

* Discover tutorials happening around them
* Become tutors themselves
* Post tutorials for other students
* Find trusted tutors
* Keep track of tutorials they want to attend

This project is being built as a full-stack MERN application.

---

# Tech Stack

## Frontend

* React
* Tailwind CSS
* React Router

## Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* bcryptjs

## Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

# Features

## Authentication

* User signup
* User login
* JWT authentication
* Protected routes
* Password hashing with bcrypt

## Tutorials

* Create tutorial posts
* View tutorials
* Delete tutorials (only creator can delete)

## Tutors

* Create tutor profiles
* Update tutor profiles
* Delete tutor profiles
* View tutors

## Dashboard

* Personalized dashboard UI
* Upcoming tutorials section
* Top tutors section
* Search bar for tutorials



# API Routes

## Users

```bash
POST /user/register
POST /user/login
```

## Tutors

```bash
GET /tutor
POST /tutor
PUT /tutor/:id
DELETE /tutor/:id
```

## Tutorials

```bash
GET /tutorials
POST /tutorials
DELETE /tutorials/:id
```

---

# What I Learned Building This

Reekol is one of the first full-stack projects I'm building mostly by myself.

While building it, I've been learning:

* Backend architecture
* Authentication with JWT
* MongoDB relationships
* Express middleware
* Protected routes
* CRUD operations
* Deployment
* CORS
* API testing with Postman
* SEO basics

This project pushed me beyond just building frontend UIs and made me start thinking more like a software engineer.

---

# Current Status

Reekol is still in active development.

The current focus is:

* Finishing authentication flow
* Connecting frontend to backend properly
* Improving tutorial management
* Building a cleaner dashboard experience
* Adding better date handling for tutorials

Future plans include:

* Google OAuth
* Saved tutorials
* Better tutor ratings
* Notifications
* Course-based filtering
* Mobile optimization
* Real-time community features

---



# Why I Built Reekol

I wanted to build something that actually solves a real problem around me while also pushing my skills as a developer.

A lot of tutorials in school are genuinely useful, but there isn't really a central place where students can discover them easily.

Reekol is meant to make tutorials easier to discover while also helping students who teach others build credibility over time.

---

# Author

Mayowa Adeleye

Software Engineering Student @ FUTA



