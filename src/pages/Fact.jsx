import { useState, useEffect } from "react";

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
          <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
          <div className="main-container">
            <p>"{fact.text}"</p>
          </div>
          <h1 className="main-container">Random Fun Fact</h1>
          <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
          <div className="main-container">
            <p>"{funFact.fact}"</p>
          </div>
        </>
      )}
    </>
  );
}

export default Fact;
