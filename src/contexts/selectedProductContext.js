import React, { useState, createContext, useContext } from "react";

const SelectedProductContext = createContext(null);

export const SelectedProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const setSelectedProduct = (selectedProduct) => {
    setProduct(selectedProduct);
  };

  return (
    <SelectedProductContext.Provider value={{ product, setSelectedProduct }}>
      {children}
    </SelectedProductContext.Provider>
  );
};

export const useSelectedProduct = () => {
  return useContext(SelectedProductContext);
};
