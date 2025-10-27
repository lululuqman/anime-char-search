import { useState } from "react";
// import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";
// import useFavorites from "./hooks/useFavorites";
import "./styles/CharacterSelect.css"; // ✅ new css

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  // const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const handleSearch = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/characters?q=${query}`);
    const data = await res.json();
    setCharacters(data.data || []);
  };

  return (
    <div className="character-select-container">
      <h1 className="title">⚡CHARACTER SELECT⚡</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search your hero..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

        <div className="character-grid">
          {characters.map((char) => (
            <div
              key={char.mal_id}
              className="character-card"
              onClick={() => setSelectedCharacter(char)}
            >
              <img src={char.images?.jpg?.image_url} alt={char.name} loading="lazy" />
              <h3 className="character-name">{char.name}</h3>
            </div>
          ))}
        </div>

      {/* 🧩 Character Modal */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

export default App;