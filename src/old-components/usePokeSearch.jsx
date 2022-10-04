import { useEffect, useState } from "react";
import axios from "axios";

export default function usePokeSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then(res => {
  //   console.log(res.data.results);
  //   const results = [];
  //   res.data.results.forEach(poke => {
  //     results.push(poke.name);
  //     setPokemons(results);
  //   });
  // });

  // useEffect(() => {
  //   setBooks([]);
  //   setPokemons([]);
  // }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => (cancel = c))
    })
      .then(res => {
        setBooks(prevBooks => {
          return [
            ...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])
          ];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
        console.log(res.data);
      })
      // .then(res => {
      //   setPokemons(prevPokemons => {
      //     return [...new Set([...prevPokemons, ...res.data.map(b => b)])];
      //   });
      //   setHasMore(res.data.results.length > 0);
      // })
      .catch(err => {
        if (axios.isCancel(err)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, pokemons, hasMore };
}
