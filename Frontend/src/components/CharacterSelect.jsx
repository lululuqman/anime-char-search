import { useEffect, useState } from "react";
import CharacterModal from "./CharacterModal";
import "../styles/CharacterSelect.css";

export default function CharacterSelect() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("naruto");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch character list based on search
  const fetchCharacters = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/characters?q=${query}&limit=12`);
      const data = await response.json();
      setCharacters(data.data || []);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(search);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCharacters(search);
  };

  return (
    <div className="character-select-container">
      <h1 className="title">⚡ CHARACTER SELECT ⚡</h1>

      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search your hero..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {loading ? (
        <div className="loading-screen">
          <div className="crt-flicker">⚡ LOADING PLAYER DATA ⚡</div>
          <div className="insert-coin">INSERT COIN...</div>
        </div>
      ) : (
        <div className="character-grid">
          {characters.map((char) => (
            <div
              key={char.mal_id}
              className="character-card"
              onClick={() => setSelectedCharacter(char)}
            >
              <img src={char.images?.jpg?.image_url} alt={char.name} />
              <h3 className="character-name">{char.name}</h3>
            </div>
          ))}
        </div>
      )}

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}