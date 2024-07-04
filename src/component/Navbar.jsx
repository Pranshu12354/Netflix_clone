// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';
import Genres from './Genres';

const Navbar = ({ onGenreSelect }) => {
  return (
    <nav>
      <img 
        src="https://wallpapers.com/images/high/netflix-logo-redon-black-8rhq73u6ww7xlwbl.png" 
        alt="Netflix logo" 
      />
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/tvshows" className="nav-link">TV Shows</Link></li>
        <li><Link to="/movies" className="nav-link">Movies</Link></li>
        <li><Link to="/newpopular" className="nav-link">New & Popular</Link></li>
      </ul>
      <Genres onGenreSelect={onGenreSelect} />
    </nav>
  );
}

export default Navbar;
