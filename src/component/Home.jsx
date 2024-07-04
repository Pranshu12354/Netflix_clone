import React, { useState, useEffect } from 'react';
import '../Style/Home.css';

const Home = ({ selectedGenre }) => {
  const [movies, setHomeMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;
        if (selectedGenre) {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${selectedGenre}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log('Fetched movies:', data.results);
        setHomeMovie(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [selectedGenre]);

  return (
    <div className="home-movie-list">
      {movies.length > 0 ? (
        movies.map(movie => {
          const isMovie = movie.media_type === ('tv');
          const tmdbUrl = isMovie 
          
            ? `https://www.themoviedb.org/tv/${movie.id}`
            : `https://www.themoviedb.org/movie/${movie.id}`;
          return (
            <a
              key={movie.id}
              href={tmdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="home-movie-item"
            >
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title || movie.name} />
              <p>{movie.title || movie.name}</p>
            </a>
          );
        })
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default Home;
