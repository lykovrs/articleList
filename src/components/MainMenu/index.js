import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({}) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/filters">Filters</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
    </ul>
  </nav>
);

export default MainMenu;
