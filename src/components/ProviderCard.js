import React, { useState } from 'react';
import { PulseAnimation } from './animations/PulseAnimation';

const ProviderCard = ({ provider, onBookNow }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`provider-card ${isHovered ? 'provider-card-hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="provider-header">
        <div className="provider-photo">
          <img src={provider.photo || "/assets/images/default-avatar.jpg"} alt={provider.name} />
          {provider.status === 'online' && (
            <PulseAnimation>
              <span className="status-indicator online"></span>
            </PulseAnimation>
          )}
          {provider.status === 'offline' && (
            <span className="status-indicator offline"></span>
          )}
        </div>
        
        <div className="provider-info">
          <h3 className="provider-name">{provider.name}</h3>
          <p className="provider-service">{provider.service}</p>
          <div className="provider-rating">
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <span 
                  key={index} 
                  className={`star ${index < Math.floor(provider.rating) ? 'filled' : 'empty'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="rating-number">{provider.rating}</span>
            <span className="reviews-count">({provider.reviews} reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="provider-details">
        <div className="detail-item">
          <span className="detail-label">Experience:</span>
          <span className="detail-value">{provider.experience}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Response Time:</span>
          <span className="detail-value highlight">{provider.responseTime}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Phone:</span>
          <span className="detail-value">{provider.phone}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Status:</span>
          <span className={`detail-value status ${provider.status}`}>
            {provider.status.charAt(0).toUpperCase() + provider.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="provider-actions">
        <button 
          className={`book-button ${provider.status === 'online' ? 'active' : 'disabled'}`}
          onClick={() => provider.status === 'online' && onBookNow(provider.id)}
          disabled={provider.status !== 'online'}
        >
          {provider.status === 'online' ? 'Book Now' : 'Currently Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default ProviderCard;
