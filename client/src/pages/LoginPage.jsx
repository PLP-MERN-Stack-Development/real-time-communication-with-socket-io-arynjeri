// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../context/ChatContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const { connect, setUsername: setGlobalUsername } = useChat();
  const navigate = useNavigate();

  const join = () => {
    if (username.trim()) {
      setGlobalUsername(username);
      connect(username);
      navigate('/chat');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Join Chat</h1>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && join()}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={join}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Enter Chat
        </button>
      </div>
    </div>
  );
}