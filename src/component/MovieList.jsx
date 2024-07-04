import React, { useState, useEffect } from 'react';
import '../Style/MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log('Fetched movies:', data.results);
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <a
          key={movie.id}
          href={`https://www.themoviedb.org/q=${encodeURIComponent(movie.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="movie-item"
        >
          <span>{index + 1}</span>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title}</p>
        </a>
      ))}
    </div>
  );
};

export default MovieList;
