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
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <Layout />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/anime/gen" element={<AnimeGif />} />
          <Route path="/fact" element={<Fact />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/jokes" element={<JokeList />} />
          <Route path="/pokemon" element={<PokedexIndex />} />
          <Route path="/poke" element={<PokeScroll />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="/minecraft" element={<MinecraftAPI />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
