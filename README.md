# VoyageVerse – Blogging Website

VoyageVerse is a modern blogging platform that allows users to explore, create, and share posts. It showcases basic user authentication, post sorting, and pagination functionalities. Some core functionalities were adapted from the work of the **MohitSojitra**, and the codebase has been updated for our specific use case. This README provides an in-depth look into how to set up, customize, and run the project.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
- [Authentication](#authentication)  
  - [Login Page](#login-page)  
  - [Protected Routes](#protected-routes)  
- [Usage and Customization](#usage-and-customization)  
  - [Updating the Logo and Icons](#updating-the-logo-and-icons)  
  - [Styling and Theming](#styling-and-theming)  
  - [Data Source](#data-source)  
- [Deployment](#deployment)  
- [Credits and Acknowledgments](#credits-and-acknowledgments)  
- [License](#license)

---

## Overview

**VoyageVerse** is a simple yet robust blogging website built with React and bundled using [Create React App](https://github.com/facebook/create-react-app). Users can:

- View posts (sorted by likes or comments).  
- Access author profiles and their posts.  
- Explore and paginate through a list of authors.  
- Log in (with a basic credential check) to unlock protected routes.  

Although we’re working with a demo **db.json** file for mock data, the architecture can be easily adapted to a real backend.

---

## Features

1. **Home Page**  
   - Displays a paginated list of authors.  
   - Quick access to authors’ profiles.  

2. **Author Profiles**  
   - Show each author’s information and posts.  
   - Sort posts by date or likes (ascending/descending).

3. **Most Liked & Most Commented Posts**  
   - Quickly see the top 10 posts with the most likes or comments.

4. **Post Details**  
   - Individual page for each post, featuring full text and comments section.

5. **Basic Authentication**  
   - Users can log in (hardcoded credentials) to access protected routes (like “Most Liked” or “Most Commented”).

6. **Responsive Navigation**  
   - A simple, collapsible navbar that adapts to various screen sizes.

7. **Minimalistic Logo & Branding**  
   - Modern UI design with neutral color palette.  
   - Updated icons and manifest for PWA capabilities.

---

## Project Structure

A high-level view of the file organization:

```
voyageverse/
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── Pages/
│   │   ├── HomePage/
│   │   │   └── Body.jsx
│   │   ├── LoginPage/
│   │   │   ├── LoginPage.jsx
│   │   │   └── LoginPage.css (optional)
│   │   ├── MostLikedPost/
│   │   │   └── MostLikedPost.jsx
│   │   ├── PostPage/
│   │   │   ├── PostPage.jsx
│   │   │   └── PostPage.css
│   │   └── ProfilePage/
│   │       ├── Profile.jsx
│   │       └── profile.css
│   ├── components/
│   │   ├── NavBar/
│   │   │   ├── NavigationBar.jsx
│   │   │   └── NavigationBar.css
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── ...
│   ├── utils/
│   │   └── db.json
│   └── ...
├── package.json
├── README.md
└── ...
```

---

## Technologies Used

1. **React** (v16+ or v17+): For building the UI.  
2. **React Router** (v5+): For routing (Switch, Route, useHistory).  
3. **Bootstrap** / **reactstrap**: For basic styling and navbar components.  
4. **db.json** (Mock Data): Contains authors, posts, and comments data.  
5. **Local Storage**: Used for storing a simple `isAuthenticated` flag.

---

## Getting Started

### Prerequisites

- **Node.js** (>= 10.x, recommended 14+).
- **npm** (>= 6.x) or **yarn** for managing dependencies.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/voyageverse.git
   cd voyageverse
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

### Running Locally

1. **Start the Development Server**:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   - Runs the app in development mode.  
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. **Production Build** (optional):
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
   - Builds the app for production to the `build` folder.

---

## Authentication

The app uses a **basic** user authentication:

- **Hardcoded Credentials**:  
  - **Username**: `user`  
  - **Password**: `password123`  

- **Local Storage**:  
  - Upon successful login, `isAuthenticated: "true"` is stored in `localStorage`.

### Login Page

- **Location**: `src/Pages/LoginPage/LoginPage.jsx`  
- **Features**:  
  - A simple form for username/password.  
  - Displays an error if the credentials are invalid.  
  - Redirects to the home page (`"/"`) upon successful login.

### Protected Routes

- **PrivateRoute** component in `App.js` checks `localStorage.isAuthenticated`.  
- If not authenticated, redirects to `"/login"`.  
- Routes like `"/most-liked"`, `"/most-commented"`, `"/profile/:authorId"`, and `"/post/:postId"` are protected.

---

## Usage and Customization

1. **Updating the Logo and Icons**  
   - **`public/logo192.png`** and **`public/logo512.png`**: Update with your own icons.  
   - **`manifest.json`**: Customize `short_name`, `name`, `theme_color`, etc.

2. **Styling and Theming**  
   - **NavigationBar.css**: Tweak colors (e.g., the navbar background, link hover).  
   - **LoginPage.css**: Adjust the login form styling.  
   - **App.css** / **index.css**: Global styles or resets.  

3. **Data Source**  
   - Currently uses **`db.json`** for posts/authors.  
   - Replace with a real API or backend for a production-grade app.

---

## Deployment

1. **Build the App**:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
2. **Host the Build**:
   - Serve the `build` folder on a static hosting service like **Netlify**, **Vercel**, or your own server.  
   - Configure **404 redirects** for client-side routing.

3. **Configure Environment Variables** (optional):
   - For real backend URLs, environment variables can be added to `.env` files.  

---

## Credits and Acknowledgments

- **Previous Owner**: This project implements certain functionalities adapted from the previous owner’s codebase. We’ve made changes to authentication, UI, routing, and more to tailor it for our own requirements.
- **Create React App**: Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## License

This project is open-sourced under the **MIT License**. You are free to use, modify, and distribute this project. If you build upon or redistribute the code, kindly acknowledge the work from the previous owner and the modifications made here. 

---

**Thank You!**  
We hope you find **VoyageVerse** intuitive and helpful for exploring how a basic React-based blogging platform can be structured. For any questions or contributions, feel free to open an issue or submit a pull request.
