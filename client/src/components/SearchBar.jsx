// src/components/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search messages..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded-md mb-4"
    />
  );
}