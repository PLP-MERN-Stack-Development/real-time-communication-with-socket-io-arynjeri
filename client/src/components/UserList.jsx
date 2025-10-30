// src/components/UserList.jsx
export default function UserList({ users, currentUser }) {
  return (
    <div className="w-64 bg-gray-50 p-4 border-r">
      <h3 className="font-bold text-lg mb-3">Online Users ({users.length})</h3>
      <div className="space-y-2">
        {users.map(user => (
          <div
            key={user.id}
            className={`flex items-center gap-2 p-2 rounded ${
              user.id === currentUser ? 'bg-indigo-100' : 'hover:bg-gray-100'
            }`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}