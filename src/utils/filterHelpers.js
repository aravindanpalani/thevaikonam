/**
 * Helper functions for filtering and sorting service providers
 */

/**
 * Filter providers based on multiple criteria
 * 
 * @param {Array} providers - The array of service providers
 * @param {String} serviceType - The type of service to filter by ('all' for no filtering)
 * @param {String} status - The status to filter by ('all' for no filtering)
 * @param {String} searchQuery - Search text to filter by name or service
 * @returns {Array} - Filtered providers array
 */
export const filterProviders = (providers, serviceType, status, searchQuery) => {
  return providers.filter(provider => 
    (serviceType === 'all' || provider.service === serviceType) &&
    (status === 'all' || provider.status === status) &&
    (searchQuery === '' || 
     provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     provider.service.toLowerCase().includes(searchQuery.toLowerCase()))
  );
};

/**
 * Sort providers based on specified criteria
 * 
 * @param {Array} providers - The array of service providers
 * @param {String} sortBy - Criteria to sort by ('rating', 'reviews', 'responseTime')
 * @returns {Array} - Sorted providers array
 */
export const sortProviders = (providers, sortBy) => {
  return [...providers].sort((a, b) => {
    switch(sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'responseTime':
        const aTime = parseInt(a.responseTime);
        const bTime = parseInt(b.responseTime);
        return aTime - bTime;
      default:
        return 0;
    }
  });
};

/**
 * Get unique service types from providers array
 * 
 * @param {Array} providers - The array of service providers
 * @returns {Array} - Array of unique service types
 */
export const getUniqueServices = (providers) => {
  const services = new Set(providers.map(provider => provider.service));
  return ['all', ...Array.from(services)];
};

/**
 * Calculate average rating for a specific service type
 * 
 * @param {Array} providers - The array of service providers
 * @param {String} serviceType - The type of service
 * @returns {Number} - Average rating for the service type
 */
export const calculateAverageRating = (providers, serviceType) => {
  const filteredProviders = serviceType === 'all' 
    ? providers 
    : providers.filter(provider => provider.service === serviceType);
  
  if (filteredProviders.length === 0) return 0;
  
  const sum = filteredProviders.reduce((total, provider) => total + provider.rating, 0);
  return (sum / filteredProviders.length).toFixed(1);
};
