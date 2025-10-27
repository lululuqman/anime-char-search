// import { useState } from "react";
// import CharacterModal from "./CharacterModal";
// import "../styles/CharacterGrid.css";

// export default function CharacterGrid({ characters }) {
//   const [selectedCharacter, setSelectedCharacter] = useState(null);

//   return (
//     <div className="character-select-screen">
//       <h1 className="select-title">SELECT YOUR CHARACTER</h1>

//       <div className="character-grid">
//         {characters.map((char) => (
//           <div
//             key={char.mal_id}
//             className="character-card"
//             onClick={() => setSelectedCharacter(char)}
//           >
//             <img
//               src={char.images.jpg.image_url}
//               alt={char.name}
//               loading="lazy"
//             />
//             <p>{char.name}</p>
//           </div>
//         ))}
//       </div>

//       <CharacterModal
//         character={selectedCharacter}
//         onClose={() => setSelectedCharacter(null)}
//       />
//     </div>
//   );
// }