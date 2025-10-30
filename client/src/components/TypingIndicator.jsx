// src/components/TypingIndicator.jsx
export default function TypingIndicator({ typingUsers }) {
  if (!typingUsers.length) return null;
  return (
    <div className="px-4 py-1 text-sm text-gray-500 italic">
      {typingUsers.join(', ')} is typing...
    </div>
  );
}