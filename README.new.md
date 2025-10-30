# Real-Time Chat Application

A modern, feature-rich chat application built with Socket.IO, React, and Node.js that enables seamless real-time communication between users.

![Chat Application](https://your-screenshot-url-here.png)

## 🌐 Live Demo

Experience the application live:
- **Frontend:** [Chat Application](https://real-time-communication-with-sock-git-45764d-arynjeris-projects.vercel.app/)
- **Backend:** [API Server](https://real-time-communication-with-socket-io-cy5e.onrender.com/)

## ✨ Features

- **Real-time Messaging:** Instant message delivery with Socket.IO
- **User Authentication:** Secure login system
- **Live Typing Indicators:** See when others are typing
- **Message Search:** Quick search through chat history
- **Active Users List:** Real-time user presence tracking
- **Responsive Design:** Works seamlessly on desktop and mobile
- **Real-time Updates:** Instant notifications and message delivery

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Socket.IO Client** - Real-time communication
- **Vite** - Build tool and development server
- **CSS** - Styling and animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time engine

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── MessageInput.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── UserList.jsx
│   │   ├── context/      # React context
│   │   ├── pages/        # Page components
│   │   └── socket/       # Socket.IO configuration
│   └── public/           # Static assets
└── server/               # Backend Node.js server
    └── server.js        # Express and Socket.IO server
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/real-time-communication-with-socket-io-arynjeri.git
   cd real-time-communication-with-socket-io-arynjeri
   ```

2. **Install Server Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running Locally

1. **Start the Server**
   ```bash
   cd server
   npm start
   ```

2. **Start the Client**
   ```bash
   cd client
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 🌟 Key Features In Detail

### Real-time Communication
- Instant message delivery
- Live typing indicators
- Active user status updates

### User Experience
- Clean and intuitive interface
- Responsive design for all devices
- Message search functionality
- User presence indicators

### Performance
- Optimized message delivery
- Efficient state management
- Quick loading times

## 🚀 Deployment

- Frontend deployed on [Vercel](https://vercel.com)
- Backend hosted on [Render](https://render.com)

## 📘 API Documentation

The backend provides a Socket.IO API with the following main events:

- `connection` - User connects to the chat
- `disconnect` - User disconnects from chat
- `chat message` - New message event
- `typing` - User typing indicator
- `stop typing` - User stopped typing

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss proposed changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Socket.IO team for the excellent real-time engine
- React team for the amazing UI library
- PLP MERN Stack Development Program