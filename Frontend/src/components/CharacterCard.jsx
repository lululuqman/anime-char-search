// export default function CharacterCard({ character, onSelect, onFavorite, isFavorite }) {
//   return (
//     <div
//       className={`character-card ${isFavorite ? "favorite" : ""}`}
//       onClick={onSelect}
//     >
//       <img src={character.images.jpg.image_url} alt={character.name} />
//       <div className="character-info">
//         <h3>{character.name}</h3>
//       </div>
//       <button
//         className="favorite-btn"
//         onClick={(e) => {
//           e.stopPropagation();
//           onFavorite();
//         }}
//       >
//         {isFavorite ? "❤️" : "🤍"}
//       </button>
//     </div>
//   );
// }