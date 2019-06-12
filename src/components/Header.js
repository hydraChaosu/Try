import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/audio">Audio</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/myredux">Redux</Link>
        </li>
        <li>
          <Link to="/cloud">Cloud</Link>
        </li>
        <li>
          <Link to="/:id">Params</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
