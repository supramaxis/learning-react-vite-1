import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { fetchApi } from "../components/fetchApi";

function SelectedQuote() {
  const [search, setSearch] = useState("");
  const [quotes, setQuotes] = useState();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleClick = async e => {
    e.preventDefault();
    const data = await fetchApi(search);
    setQuotes(data);
  };

  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input type="text" onChange={handleChange} />

          <div className="searchIcon">
            <MdOutlineSearch
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {search.length != 0 && (
          <div className="results">
            {quotes &&
              quotes.map((quote, i) => {
                return (
                  <p className="parr">
                    {quote.quote} - {quote.character} from "{quote.anime}"
                  </p>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}

export default SelectedQuote;
