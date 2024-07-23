// src/components/MovieList.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const API_KEY = '2c9a2424';

function MovieList({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

      axios.get(API_URL)
        .then(response => {
          setMovies(response.data.Search || []);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        movies.map(movie => (
          <Card key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MovieList;
