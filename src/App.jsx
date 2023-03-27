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
import Login from './pages/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AnonAPI } from './pages/AnonAPI';
import TrimAudio from './pages/TrimAudio';
import YTDownloader from './pages/YTDownloader';
import McApi from './pages/McApi';
import { SupabaseProvider } from './context/ItemsContext';
import McApiAdmin from './pages/McApiAdmin';

export default function App() {
  return (
    <>
      <Layout />
      <SupabaseProvider>
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
          <Route path='/anon' element={<AnonAPI />} />
          <Route path='/trim' element={<TrimAudio />} />
          <Route path='/downloader' element={<YTDownloader />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mcapi' element={<McApi />} />
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path='/mcapi/admin' element={<McApiAdmin />} />
          {/* </Route> */}
        </Routes>
      </SupabaseProvider>
    </>
  );
}
