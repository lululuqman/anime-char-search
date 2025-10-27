// import { useState } from "react";

// export default function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//       <input
//         type="text"
//         placeholder="Search characters..."
//         className="border rounded p-2 flex-grow"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700"
//       >
//         Search
//       </button>
//     </form>
//   );
// }