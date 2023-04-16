import React from "react";
import { useContext } from "react";
import { useState } from "react";

const ItemsContext = React.createContext();
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// by exporting this function we don't need to use useContext inside each components when we want to get or update theme
// these functions return the context and we can import them in other components easily

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// export function themeUpdate() {
//   return useContext(ThemeUpdateContext);
// }

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState(false);

  function addNewItem(itemName, price) {
    setItems((prevItems) => [...prevItems, { itemName, price }]);
  }

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeUpdateContext.Provider value={{ toggleTheme }}>
        <ItemsContext.Provider value={{ items, addNewItem }}>
          {children}
        </ItemsContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ItemsContext;
