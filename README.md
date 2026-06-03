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



<div className='grid grid-cols-2 w-full my-8 gap-8'>
                                <div className='w-90 border border-gray-200 p-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[20px]'>MTH 201: Advanced Calculus</p>
                                        <div className='px-2 py-1 bg-green-50 w-fit'>
                                            <p className='text-green'>TODAY</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-[14px]'>Taught by Adeyemi T.</p>
                                    <hr className='text-gray-300 my-4' />
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>TIME</p>
                                            <p>4:00 PM - 6:00 PM</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                            <p>LT 2, Science Faculty</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                            <p>4:00 PM - 6:00 PM</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>FEE</p>
                                            <p>Free</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-90 border border-gray-200 p-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[20px]'>MCS 201: Exam Prep</p>
                                        <div className='px-2 py-1 bg-green-50 w-fit'>
                                            <p className='text-green'>TODAY</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-[14px]'>Taught by Blessing</p>
                                    <hr className='text-gray-300 my-4' />
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>TIME</p>
                                            <p>10:00 AM - 12:00 PM</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                            <p>SLS 3 in 1 A</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                            <p>45/50</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>FEE</p>
                                            <p>Free</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-90 border border-gray-200 p-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[20px]'>MTH 112</p>
                                        <div className='px-2 py-1 bg-green-50 w-fit'>
                                            <p className='text-green'>TOMORROW</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-[14px]'>Taught by Adeyemi T.</p>
                                    <hr className='text-gray-300 my-4' />
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>TIME</p>
                                            <p>4:00 PM - 6:00 PM</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                            <p>Great Hall</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                            <p>12/30</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>FEE</p>
                                            <p>Paid</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-90 border border-gray-200 p-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[20px]'>MTH 301: Abstract Algebra</p>
                                        <div className='px-2 py-1 bg-green-50 w-fit'>
                                            <p className='text-green'>TODAY</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-[14px]'>Taught by Parker V.</p>
                                    <hr className='text-gray-300 my-4' />
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>TIME</p>
                                            <p>6:00 PM - 8:00 PM</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                            <p>FOC 500 Cap</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                            <p>40/100</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-[13px]'>FEE</p>
                                            <p>Free</p>
                                        </div>
                                    </div>
                                </div>
                            </div>