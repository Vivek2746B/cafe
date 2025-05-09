
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        Caffeine Cove
        
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/menu" className="navbar-link">Menu</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon">☰</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;