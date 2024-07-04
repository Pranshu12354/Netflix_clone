import React, { useEffect, useState } from "react";
import '../Style/Home.css';

const NewAndPopular = () => {
  const [newAndPopular, setNewAndPopular] = useState([]);

  useEffect(() => {
    const fetchNAP = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        console.log('Fetched Popular series', data.results);
        setNewAndPopular(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNAP();
  }, []);

  return (
    <div className='home-movie-list'>
      {newAndPopular.length > 0 ? (
        newAndPopular.map((item) => (
          <a 
            key={item.id}
            href={`https://www.themoviedb.org/person/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="home-movie-item"
          >
            <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt={item.name} />
            <p>{item.name}</p>
          </a>
        ))
      ) : (
        <p>No popular people available.</p>
      )}
    </div>
  );
}

export default NewAndPopular;
