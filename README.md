<h1 style="font-size: 36px; margin-bottom: 10px;">🎨 AI Background Remover – MERN Fullstack App</h1>

Live Demo 👉 https://fullstack-bg-removal-app-75fj.vercel.app

Remove image backgrounds instantly using AI + Clipdrop API, manage access through a credit-based system, and handle payments securely via Razorpay.
Built with a clean MERN architecture and secured with Clerk Authentication.

---

## 🚀 Features

### 🖼️ AI Background Removal
- Uses Clipdrop Remove Background API to produce high-quality cutouts.
- Returns processed image in base64 format (no backend file storage required).

### 🔐 User Authentication
- Secure login/signup with Clerk.
- Automatic user sync using Clerk Webhooks.
- 

### 💳 Buy Credits via Razorpay
- Users can purchase plans (Basic / Advanced / Business).
- Payments fully validated using Razorpay signatures.
- Credits are added only after successful verification.

### 📦 Credit-Based System
- Removing a background costs 1 credit.
- Credits update in real time across the UI.
 
### 🌐 Full-Stack MERN
- React + Context API for frontend state management
- Node + Express backend
- MongoDB for users & transactions
- Multer for file uploads
 
### ⚡ Additional Highlights
- Global App Context for state management
- Clean routing and modular architecture
- Fully responsive UI
- Smooth user experience

---

## 🏗 Tech Stack

### **Frontend**
- React + Vite  
- React Router
- TailwindCSS
- Clerk Authentication (Frontend SDK)
- Axios
- Razorpay Checkout (Frontend SDK)
- Context API (Global State Management)

### **Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- Multer (File Upload Handling)
- Clipdrop API (Background Removal)
- Razorpay Node SDK (Payment Integration)
- Clerk Webhooks (User Sync)
- JSON Web Token (Token Decoding for Auth)

---

## 📸 Screenshots

### 📝 Home / Upload Page
![Signup](https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.48.12.png?raw=true)

### 🔐 Sign-In / Clerk Authentication Screen
![Login](https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.35.36.png?raw=true)

### 💬 Background Removal — Result Page
![Chat](https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.36.55.png?raw=true)

### 🎨 Buy Credits Page (Pricing Page)
![Settings](https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.37.26.png?raw=true)

### Razorpay Checkout Popu
![Profile](https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.37.29.png?raw=true)

---
