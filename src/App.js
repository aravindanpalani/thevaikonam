import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ServiceFilter from './components/ServiceFilter';
import ProviderCard from './components/ProviderCard';
import Footer from './components/Footer';
import { providers as initialProviders } from './data/providers';
import FadeIn from './components/animations/FadeIn';
import './styles/global.css';

function App() {
  // State
  const [providers, setProviders] = useState([]);
  const [selectedService, setSelectedService] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [isLoading, setIsLoading] = useState(true);

  // Available services
  const services = ['all', 'Plumbing', 'Electrician', 'Toilet Cleaning', 'Water Tank Service', 'House Cleaning'];

  // Simulate loading data
  useEffect(() => {
    setTimeout(() => {
      setProviders(initialProviders);
      setIsLoading(false);
    }, 1500);
  }, []);

  // Filter and sort providers
  const filteredProviders = providers
    .filter(provider => 
      (selectedService === 'all' || provider.service === selectedService) &&
      (statusFilter === 'all' || provider.status === statusFilter) &&
      (searchQuery === '' || provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       provider.service.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviews - a.reviews;
      if (sortBy === 'responseTime') {
        const aTime = parseInt(a.responseTime);
        const bTime = parseInt(b.responseTime);
        return aTime - bTime;
      }
      return 0;
    });

  // Handle booking
  const handleBookNow = (providerId) => {
    alert(`Booking service with provider ID: ${providerId}`);
  };

  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container">
        <FadeIn>
          <ServiceFilter 
            services={services}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </FadeIn>

        <section className="providers-section">
          <h2 className="section-title">Available Service Providers</h2>
          
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Finding the best service providers for you...</p>
            </div>
          ) : (
            <div className="providers-grid">
              {filteredProviders.map((provider, index) => (
                <FadeIn delay={index * 100} key={provider.id}>
                  <ProviderCard 
                    provider={provider} 
                    onBookNow={handleBookNow} 
                  />
                </FadeIn>
              ))}
            </div>
          )}

          {!isLoading && filteredProviders.length === 0 && (
            <div className="no-results">
              <p>No service providers found matching your criteria</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
