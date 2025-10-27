import { useEffect, useState } from "react";
import "../styles/CharacterModal.css";

export default function CharacterModal({ character, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch full details of the selected character
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/characters/${character.mal_id}/full`);
        const data = await response.json();
        setDetails(data.data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [character.mal_id]);

  if (!character) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="character-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {loading ? (
          <div className="modal-loading">
            <span className="crt-flicker">LOADING CHARACTER DATA...</span>
          </div>
        ) : (
          <>
            <h2 className="modal-title">PLAYER 1 READY</h2>

            <div className="modal-content">
              <div className="modal-image">
                <img
                  src={details?.images?.jpg?.image_url || character.images?.jpg?.image_url}
                  alt={character.name}
                  loading="lazy"
                />
              </div>

              <div className="modal-info">
                <h3 className="character-name">{details?.name || character.name}</h3>

                {details?.nicknames?.length > 0 && (
                  <p className="nicknames">
                    <strong>ALIASES:</strong> {details.nicknames.join(", ")}
                  </p>
                )}

                {details?.about && (
                  <p className="about">
                    {details.about.split(". ").slice(0, 3).join(". ") + "..."}
                  </p>
                )}

                <div className="appearances">
                  <h4>ANIME APPEARANCES</h4>
                  {details?.anime?.length ? (
                    <ul>
                      {details.anime.slice(0, 5).map((a) => (
                        <li key={a.anime.mal_id}>{a.anime.title}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>UNKNOWN</p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}