import React, { createContext, useContext, useState } from 'react';

const CosmeticsContext = createContext();

export const CosmeticsProvider = ({ children }) => {
  const [cosmeticsData, setCosmeticsData] = useState([

  ]);

  const updateCosmeticsData = (newData) => {
    setCosmeticsData(newData);
  };

  return (
    <CosmeticsContext.Provider value={{ cosmeticsData, updateCosmeticsData }}>
      {children}
    </CosmeticsContext.Provider>
  );
};

export const useCosmeticsContext = () => useContext(CosmeticsContext);
