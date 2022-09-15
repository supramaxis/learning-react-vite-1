import { useEffect, useState } from "react";

function AnimeGif() {
  const [gif, setGif] = useState([]);

  useEffect(() => {
    async function fetchGif() {
      const data = await fetch("https://api.waifu.pics/sfw/lick");
      const res = await data.json();
      setGif(res);
    }
    fetchGif();
  }, []);

  return (
    <>
      <h1 className="main-container">Random Anime Gifs</h1>
      <div className="image-container">
        <img src={gif.url} alt={gif.url} />
      </div>
      <div className="button-container">
        <button>See a new gif</button>
      </div>
    </>
  );
}

export default AnimeGif;

