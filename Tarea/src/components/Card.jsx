// src/components/Card.jsx
function Card({ movie }) {
    return (
      <div className="card">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    );
  }
  
  export default Card;
  