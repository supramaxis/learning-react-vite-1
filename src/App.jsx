import { Route, Routes } from 'react-router-dom';
import AnimeGif from './pages/AnimeGif';
import Home from './pages/Home';
import Layout from './components/Layout';
import Fact from './pages/Fact';
import Search from './components/Search';
import JokeList from './pages/JokeList';
import PokedexIndex from './pages/PokedexIndex';
import NotFound from './old-components/NotFound';
import Giveaways from './pages/Giveaways';
import MinecraftAPI from './pages/MinecraftAPI';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Account from './pages/Account';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AnonAPI } from './pages/AnonAPI';
import Convert from './pages/Convert';
import TrimAudio from './pages/TrimAudio';

export default function App() {
  return (
    <AuthProvider>
      <Layout />

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/anime/gen' element={<AnimeGif />} />
        <Route path='/fact' element={<Fact />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/jokes' element={<JokeList />} />
        <Route path='/pokemon' element={<PokedexIndex />} />
        <Route path='/giveaways' element={<Giveaways />} />
        <Route path='/minecraft' element={<MinecraftAPI />} />
        <Route path='/account' element={<Account />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/anon' element={<AnonAPI />} />
        <Route path='/mp3' element={<Convert />} />
        <Route path='/trim' element={<TrimAudio />} />
      </Routes>
    </AuthProvider>
  );
}
