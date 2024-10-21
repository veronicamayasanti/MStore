import { createContext, useState} from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
   

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if item is already in cart
    const existItem = cart.find((item) => {
      return item.id === id;
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
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    addToCart(cartItem, id);
    
  }
  
  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if(cartItem){
      const newCart = cart.map((item) => {
        if(item.id === id){
          return { ...item, amount: cartItem.amount - 1 };
        }else {
          return item
        }
      });

      setCart(newCart);
    }

    if(cartItem.amount < 2){
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider
