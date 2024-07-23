// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = useState('batman');

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Content query={query} />
      <Footer />
    </>
  );
}

export default App;
