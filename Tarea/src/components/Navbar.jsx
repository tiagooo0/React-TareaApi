// src/components/Navbar.jsx
import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">TuMarca</a>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
