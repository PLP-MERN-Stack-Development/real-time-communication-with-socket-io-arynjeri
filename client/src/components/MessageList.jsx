// src/components/MessageList.jsx
import { format } from 'date-fns';

export default function MessageList({ messages, currentUser }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.senderId === currentUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              msg.system ? 'bg-yellow-100 text-yellow-800 text-sm' :
              msg.senderId === currentUser ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            {!msg.system && <p className="font-semibold text-xs">{msg.sender}</p>}
            <p>{msg.message}</p>
            <p className="text-xs opacity-70 mt-1">
              {format(new Date(msg.timestamp), 'HH:mm')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}