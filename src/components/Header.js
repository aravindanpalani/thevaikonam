import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { SlideIn } from './animations/SlideIn';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <SlideIn direction="left">
          <div className="logo-container">
            <h1 className="logo">
              <span className="logo-text">Namma Thevai</span>
              <span className="logo-tagline">Your Emergency Service Solution</span>
            </h1>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
        </SlideIn>

        <div className="emergency-contact">
          <div className="pulse-animation">
            <span className="emergency-indicator"></span>
          </div>
          <div className="emergency-text">
            <span className="emergency-label">24/7 Emergency Support</span>
            <span className="emergency-number">1-800-NAMMA-HELP</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
