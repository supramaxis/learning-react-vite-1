import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdOutlineMenu } from 'react-icons/md';

function Layout() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <>
      <div className='navContainer'>
        <nav>
          {(toggleMenu || screenWidth > 750) && (
            <ul className='list'>
              <li>
                <Link to='/' className='navLinks'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/anime/gen' className='navLinks'>
                  Anime Gif
                </Link>
              </li>
              <li>
                <Link to='/placeholder' className='navLinks'>
                  Placeholder
                </Link>
              </li>
              <li>
                <Link to='/fact' className='navLinks'>
                  Fact
                </Link>
              </li>
              <li>
                <Link to='/jokes' className='navLinks'>
                  Jokes
                </Link>
              </li>
              <li>
                <Link to='/pokemon' className='navLinks'>
                  Pokemons API
                </Link>
              </li>
              <li>
                <Link to='/minecraft' className='navLinks'>
                  Minecraft API
                </Link>
              </li>
              <li>
                <Link to='/giveaways' className='navLinks'>
                  Giveaways API
                </Link>
              </li>
              <li>
                <Link to='/downloader' className='navLinks'>
                  YTDownloader
                </Link>
              </li>
            </ul>
          )}
          <button className='navBtn' onClick={handleToggleMenu}>
            <MdOutlineMenu />
          </button>
        </nav>
      </div>
    </>
  );
}

export default Layout;
