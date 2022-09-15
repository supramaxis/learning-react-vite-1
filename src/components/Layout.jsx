import { Outlet, Link } from "react-router-dom";

import React from "react";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="navLinks">
              Home
            </Link>
          </li>
          <li>
            <Link to="/anime/gen" className="navLinks">
              Anime Gen
            </Link>
          </li>
          <li>
            <Link to="/placeholder" className="navLinks">
              Placeholder
            </Link>
          </li>
          <li>
            <Link to="/fact" className="navLinks">
              Fact
            </Link>
          </li>
          <li>
            <Link to="/pokemon" className="navLinks">
              Pokemons API
            </Link>
          </li>
          <li>
            <Link to="/jokes" className="navLinks">
              Jokes
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;

