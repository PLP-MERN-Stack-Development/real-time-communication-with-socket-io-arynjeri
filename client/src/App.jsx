// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </ChatProvider>
    </Router>
  );
}