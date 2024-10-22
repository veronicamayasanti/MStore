import { createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.amount
    }, 0)
    setTotal(total)
  })

   
  // update item amount
  useEffect(() => {
    if (cart) {
      setItemAmount(cart.reduce((acc, curr) => {
        return acc + curr.amount
      }, 0))
    }
  }, [cart])

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
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider
