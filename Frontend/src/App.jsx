import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";
import useFavorites from "./hooks/useFavorites";
import "./styles/CharacterSelect.css"; // ✅ new css

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const handleSearch = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/characters?q=${query}`);
    const data = await res.json();
    setCharacters(data.data || []);
  };

  return (
    <div className="character-select-container">
      <h1 className="title">🎌 Anime Character Select 🎮</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search your fighter..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="character-grid">
        {characters.map((char) => (
          <CharacterCard
            key={char.mal_id}
            character={char}
            onSelect={() => setSelectedCharacter(char)}
            onFavorite={() => toggleFavorite(char)}
            isFavorite={isFavorite(char.mal_id)}
          />
        ))}
      </div>

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