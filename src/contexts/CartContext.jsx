import { createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if item is already in cart
    const existItem = cart.find((item) =>  {
      return item.id === id
    });
    if (existItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: existItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      
      setCart([...cart, newItem]);
    }
  }

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}


48.26
export default CartProvider
