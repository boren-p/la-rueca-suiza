import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [advance, setAdvance] = useState(0); // porcentaje de anticipo

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      }
      return [...prev, product];
    });
  }

  function removeFromCart(id) {
  setCart(prev => prev.filter(p => p.id !== id));
}

  function increaseAdvance() {
    if (advance < 100) setAdvance(prev => prev + 10);
  }

  function decreaseAdvance() {
    if (advance > 0) setAdvance(prev => prev - 10);
  }

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const advanceValue = (total * advance) / 100;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        total,
        advance,
        advanceValue,
        increaseAdvance,
        decreaseAdvance,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}