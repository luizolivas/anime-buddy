import { useEffect, useState } from "react";
import { getTopAnimes } from "../services/api";


const AnimeList = () => {
    const [animes, setAnimes] = useState([])
    const [loading, setLoading] = useState(true)

 useEffect(() => {
    const fetchAnimes = async () => {
      const result = await getTopAnimes();
      setAnimes(result);
      setLoading(false);
    };
    fetchAnimes();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Top Animes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {animes.map((anime) => (
          <div key={anime.mal_id} style={{ width: "200px", border: "1px solid #ddd", padding: "1rem" }}>
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{anime.title}</h3>
            <p>Nota: {anime.score ?? "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;