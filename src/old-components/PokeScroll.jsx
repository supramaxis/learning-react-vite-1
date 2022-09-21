import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { getPokemons, getPokemonData, fetchApi } from "../components/fetchApi";
import Pagination from "../components/Pagination";

export default function PokeScroll() {
  let offset = 0;
  const [query, setQuery] = useState(""); // search query state
  const [pageNumber, setPageNumber] = useState(1); // search query state
  const [pokemons, setPokemons] = useState([]); // search query state
  const [loading, setLoading] = useState(true); // search query state
  const [hasMore, setHasMore] = useState(false); // search query state
  const [error, setError] = useState(false); // search query state
  const [page, setPage] = useState(1); // search query state
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  // const fetchPokemons = async () => {
  //   try {
  //     const data = await getPokemons(25, 25 * page);
  //     const promises = data.results.map(async pokemon => {
  //       return await getPokemonData(pokemon.url);
  //     });
  //     const results = await Promise.all(promises);
  //     setPokemons(results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemons(prevPokemons => {
          return [...new Set([...prevPokemons, ...res.data.results])];
        });
        setHasMore(res.data.results.length > 0);
        // setPokemons(res.data.results.map(poke => poke.name));
        console.log(res.data);
      });
    return () => cancel();
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  // useEffect(() => {
  //   setLoading(true);

  //   fetchPokemons();
  // }, [page]);

  return (
    <>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {pokemons.map((poke, i) => {
            return (
              <div key={i}>
                <p>
                  #{i + 1}: {poke.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
