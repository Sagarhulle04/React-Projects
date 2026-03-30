import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CardContext.Provider value={{ setCart, cart }}>
      {children}
    </CardContext.Provider>
  );
};

function useCart() {
  const context = useContext(CardContext);

  if (context === "undefined") {
    console.log("Card Context was used outside the Card Provider");
  }

  return context;
}

export { CartProvider, useCart };
