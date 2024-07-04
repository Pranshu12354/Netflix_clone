import React, { useState, useEffect } from 'react';
import '../Style/TvShows.css'; 

const TvShows = () => {
  const [tvShows, setTvShow] = useState([]);

  useEffect(() => {
    const fetchTvShow = async () => {
      try {
        const tvDataResponse = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`);
        if (!tvDataResponse.ok) {
          throw new Error('Failed to fetch');
        }
        const tvData = await tvDataResponse.json();
        console.log('Fetched Data', tvData.results);
        setTvShow(tvData.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTvShow();
  }, []);

  return (
    <div className='tv-shows-list'>
      {tvShows.length > 0 ? (
        tvShows.map(tv => (
          <a
            key={tv.id}
            href={`https://www.netflix.com/search?q=${encodeURIComponent(tv.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tv-show-item"
          >
            <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.name} />
            <p>{tv.name}</p>
          </a>
        ))
      ) : (
        <p>No TV Show Found</p>
      )}
    </div>
  );
};

export default TvShows;
