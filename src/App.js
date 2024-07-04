import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import SplashScreen from './component/SplashScreen';
import MovieList from './component/MovieList';
import Home from './component/Home';
import TvShows from './component/TvShows';
import NewAndPopular from './component/NewAndPopular';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading ? (
        <SplashScreen onFinish={handleFinishLoading} />
      ) : (
        <>
          <Navbar onGenreSelect={setSelectedGenre} />
          <Routes>
            <Route path="/" element={<Home selectedGenre={selectedGenre} />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path ="/newpopular" element={<NewAndPopular/>}/>
           
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
