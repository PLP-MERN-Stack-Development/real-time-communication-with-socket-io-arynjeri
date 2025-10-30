// src/components/MessageInput.jsx
import { useState } from 'react';

export default function MessageInput({ onSend, onTyping }) {
  const [text, setText] = useState('');

  const send = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            onTyping(true);
            clearTimeout(window.typingTimer);
            window.typingTimer = setTimeout(() => onTyping179(false), 1000);
          }}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={send}
          className="bg-indigo-600 text-white px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}