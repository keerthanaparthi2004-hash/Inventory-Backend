# Simple Inventory Management System - Assignment 12

Backend-only Inventory Management System built with Node.js + Express.
Data is stored in-memory using arrays (No Database).

## Features
- Full CRUD APIs for Inventory
- Filtering by category & quantity
- Searching by item name
- Validation Middleware
- Centralized Error Handling
- Consistent JSON Response

## Tech Stack
- Node.js
- Express.js
- dotenv
- cors
- nodemon

## How to Run
npm install
npm run dev

Server will run on: http://localhost:3000

## APIs
- GET /api/inventory - Get all items
- GET /api/inventory/:id - Get single item
- POST /api/inventory - Add item
- PUT /api/inventory/:id - Update item
- DELETE /api/inventory/:id - Delete item

## Filtering & Search
- ?category=Electronics
- ?minQuantity=10
- ?search=lap
