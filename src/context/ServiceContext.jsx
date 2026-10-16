import React, { createContext, useContext, useState, useEffect } from 'react';
import servicesData from '../data/services.json';

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // In a real app, you might fetch this from an API
    // For now, we use the imported JSON
    setServices(servicesData);
  }, []);

  return (
    <ServiceContext.Provider value={{ services }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
};
