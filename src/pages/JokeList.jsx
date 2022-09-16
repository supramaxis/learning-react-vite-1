import { useState, useEffect } from "react";
import Joke from "../components/Joke";

function JokeList() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJoke() {
      const data = await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Dark?type=single&amount=5"
      );
      const res = await data.json();
      setJokes(res.jokes);
      setLoading(false);
      console.log(res.jokes);
    }
    fetchJoke();
  }, []);
  return (
    <>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <h1 className="title-container">5 Random Jokes</h1>

          <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
          {jokes.map(joke => (
            <Joke joke={joke} key={joke.id} />
          ))}
        </>
      )}
    </>
  );
}

export default JokeList;

