import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-block">
      <nav>
        <aside>
          <img
            src="https://www.livestrong.org/sites/default/files/icon-book.png"
            alt="" height="80px"
          />
        </aside>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
