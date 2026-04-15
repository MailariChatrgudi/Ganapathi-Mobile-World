# Ganapathi Mobile World

A modern, responsive e-commerce platform for mobile phones and accessories, built with React and Node.js.

## Features

- **Modern UI**: Glassmorphism design with dark/light mode support.
- **Authentication**: Secure login and registration with JWT.
- **Product Management**: Admin dashboard to manage products and categories.
- **User Features**: Wishlist, order history, and profile management.
- **Responsive Design**: Seamless experience across desktop and mobile devices.

## Tech Stack

### Frontend
- **React** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend
- **Node.js** & **Express**
- **MongoDB** with Mongoose
- **JWT** for authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ganapathimobileworld
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   # Create a .env file in the server directory
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   # Create a .env file in the client directory
   cp .env.example .env
   # Edit .env with your API URL (default: http://localhost:5000/api)
   npm run dev
   ```

## Usage

- **Admin Login**: `[EMAIL_ADDRESS]` / `admin123`
- **User Login**: Register a new account or use existing credentials.
- **Website**: Open `http://localhost:5173` in your browser.
