import { useState, useEffect } from "react";
import Joke from "./JokeList";

function Fact() {
  const [fact, setFact] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [funFact, setFunFact] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFact() {
      const data = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const res = await data.json();
      setFact(res);
      setLoading(false);
      // console.log(res);
    }
    fetchFact();
  }, []);

  const bromas = jokes.map(element => {
    return element.joke;
  });
  return (
    <>
      {loading ? (
        <h1 className="main-container">Loading Random Fact...</h1>
      ) : (
        <>
          <h1 className="main-container">Random Fact</h1>
          <hr />
          <div className="main-container">
            <p>"{fact.text}"</p>
          </div>
          <h1 className="main-container">Random Fun Fact</h1>
          <hr />
          <div className="main-container">
            <p>"{funFact.fact}"</p>
          </div>
        </>
      )}
    </>
  );
}

export default Fact;

