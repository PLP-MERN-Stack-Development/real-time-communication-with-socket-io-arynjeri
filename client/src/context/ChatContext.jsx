// src/context/ChatContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { useSocket } from '../socket/socket';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const socketHook = useSocket();
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState('');

  // Load older messages from REST API
  const loadHistory = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/messages`);
      const history = await res.json();
      setMessages(history);
    } catch (err) {
      console.error('Failed to load history');
    }
  };

  useEffect(() => {
    if (socketHook.isConnected) {
      loadHistory();
    }
  }, [socketHook.isConnected]);

  // Append new messages
  useEffect(() => {
    if (socketHook.lastMessage) {
      setMessages(prev => [...prev, socketHook.lastMessage]);
      playNotification();
    }
  }, [socketHook.lastMessage]);

  const sendMessage = (text) => {
    if (text.trim()) {
      socketHook.sendMessage(text);
    }
  };

  const filteredMessages = messages.filter(msg =>
    msg.message?.toLowerCase().includes(search.toLowerCase())
  );

  const playNotification = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch(() => {});
    if (Notification.permission === 'granted') {
      new Notification('New message', { body: 'You have a new message in chat' });
    }
  };

  return (
    <ChatContext.Provider value={{
      ...socketHook,
      username, setUsername,
      messages: filteredMessages,
      allMessages: messages,
      sendMessage,
      search, setSearch,
    }}>
      {children}
    </ChatContext.Provider>
  );
};