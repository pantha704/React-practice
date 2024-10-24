import React, { createContext, useState, useContext } from "react";

// Create a Context
const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <AppContext.Provider value={{ count, setCount, incrementCount }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
