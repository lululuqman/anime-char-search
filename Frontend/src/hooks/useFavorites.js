// import { useState, useEffect } from "react";

// export default function useFavorites() {
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage when app loads
//   useEffect(() => {
//     const saved = localStorage.getItem("favorites");
//     if (saved) setFavorites(JSON.parse(saved));
//   }, []);

//   // Save favorites to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleFavorite = (char) => {
//     setFavorites((prev) => {
//       const exists = prev.find((f) => f.mal_id === char.mal_id);
//       if (exists) {
//         return prev.filter((f) => f.mal_id !== char.mal_id);
//       } else {
//         return [...prev, char];
//       }
//     });
//   };

//   const isFavorite = (id) => favorites.some((f) => f.mal_id === id);

//   return { favorites, toggleFavorite, isFavorite };
// }