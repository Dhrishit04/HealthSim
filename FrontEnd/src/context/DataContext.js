import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sensorData, setSensorData] = useState([]);

  return (
    <DataContext.Provider value={{ sensorData, setSensorData }}>
      {children}
    </DataContext.Provider>
  );
};
