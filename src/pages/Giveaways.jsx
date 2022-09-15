import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getGiveaways } from "../components/fetchApi";

export default function Giveaways() {
  const [giveaways, setGiveaways] = useState([]);
  const fetchGiveaways = async () => {
    try {
      const data = await getGiveaways();
      setGiveaways(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGiveaways();
  }, []);

  return (
    <>
      <h1 className="main-container">Giveaways</h1>

      {giveaways.map(gvw => (
        <div key={gvw.id}>
          <h2 className="gvwTitles">{gvw.title}</h2>
          <p>{gvw.description}</p>
          <p>{gvw.instructions} </p>
          <div className="gvwLinks">
            <a href={gvw.open_giveaway_url} target="_blank">
              Link
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

