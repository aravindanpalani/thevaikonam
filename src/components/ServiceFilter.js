import React from 'react';

const ServiceFilter = ({ 
  services, 
  selectedService, 
  setSelectedService, 
  statusFilter, 
  setStatusFilter, 
  sortBy, 
  setSortBy 
}) => {
  return (
    <section className="filter-section">
      <h2 className="filter-title">Filter Services</h2>
      
      <div className="service-filters">
        {services.map(service => (
          <button
            key={service}
            className={`service-filter-button ${selectedService === service ? 'active' : ''}`}
            onClick={() => setSelectedService(service)}
          >
            {service === 'all' ? 'All Services' : service}
          </button>
        ))}
      </div>
      
      <div className="filter-controls">
        <div className="filter-group">
          <label className="filter-label">Status</label>
          <select 
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label className="filter-label">Sort By</label>
          <select 
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Rating</option>
            <option value="reviews">Reviews</option>
            <option value="responseTime">Response Time</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ServiceFilter;
