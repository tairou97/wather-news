import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Nav = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "more-wather", name: "More Wather" },
  ];
  return (
    <nav>
      <ul>
        {Nav.map((navbar) => (
          <Link key={navbar.id}>{navbar.name}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
