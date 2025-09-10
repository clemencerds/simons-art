import { createContext, useContext, useState} from 'react';

//define an empty box
const CartContext = createContext();

//component that provides the cart and its functions to the whole app
export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (painting) => {
        setCart((prev) => {
            return [...prev, {...painting, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        //the content of value={{}} is available everywhere and {children} is the rest of the app
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}