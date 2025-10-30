// src/pages/ChatPage.jsx
import { Link } from 'react-router-dom';
import MessageInput from '../components/MessageInput';
import MessageList from '../components/MessageList';
import SearchBar from '../components/SearchBar';
import TypingIndicator from '../components/TypingIndicator';
import UserList from '../components/UserList';
import { useChat } from '../context/ChatContext';

export default function ChatPage() {
  const {
    socket,
    isConnected,
    messages,
    users,
    typingUsers,
    username,
    sendMessage,
    setTyping,
    search,
    setSearch,
  } = useChat();

  if (!username) return <div>Loading...</div>;

  return (
    <div className="flex h-screen bg-gray-100">
      <UserList users={users} currentUser={socket.id} />

      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Global Chat</h2>
            <p className="text-sm text-gray-500">
              {isConnected ? 'Connected' : 'Connecting...'}
            </p>
          </div>
          <Link to="/" className="text-indigo-600 hover:underline">Logout</Link>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        <MessageList messages={messages} currentUser={socket.id} />
        <TypingIndicator typingUsers={typingUsers} />
        <MessageInput onSend={sendMessage} onTyping={setTyping} />
      </div>
    </div>
  );
}