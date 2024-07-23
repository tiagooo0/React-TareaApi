// src/components/Content.jsx
import MovieList from './MovieList';

function Content({ query }) {
  return (
    <div className="content-container">
      <div className="card-container">
        <MovieList query={query} />
      </div>
    </div>
  );
}

export default Content;
