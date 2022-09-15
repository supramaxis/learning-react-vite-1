import axios from "axios";
import QuoteList from "./old-components/QuoteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeGif from "./pages/AnimeGif";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import Fact from "./pages/Fact";
import Search from "./components/Search";
import JokeList from "./pages/JokeList";
import SearchBar from "./components/SearchBar";
import PokedexIndex from "./pages/PokedexIndex";
import PokeScroll from "./old-components/PokeScroll";
import NotFound from "./old-components/NotFound";
import Giveaways from "./pages/Giveaways";
import MinecraftAPI from "./pages/MinecraftAPI";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/anime/gen" element={<AnimeGif />} />
        <Route path="/fact" element={<Fact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/jokes" element={<JokeList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pokemon" element={<PokedexIndex />} />
        <Route path="/poke" element={<PokeScroll />} />
        <Route path="/giveaways" element={<Giveaways />} />
        <Route path="/minecraft" element={<MinecraftAPI />} />
      </Route>
    </Routes>
  );
}

