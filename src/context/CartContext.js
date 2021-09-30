import { useState, createContext, useContext } from 'react';

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addProductCart = (product, quantity) => {
        let productIndex = cart.findIndex((e) => e.product.id === product.id);
        if (productIndex === -1) {
            setCart((cart) => [...cart, { product: product, quantity: quantity }]);
        } else {
            let modifiedCart = [...cart];
            modifiedCart[productIndex].cant += quantity;
            setCart(modifiedCart);
        }
    };
    const iconCart = () => {
        return cart.reduce((acum, value) => acum + value.quantity, 0);
    }
    const removeItemCart = (id) => {
        const removeFilter = cart.filter(e => e.product.id !== id)
        return setCart(removeFilter);
    }
    const deleteCart = () => setCart([])
    const totalPriceCart = () => {
        return cart.reduce((acum, value) => (acum + (value.quantity * value.product.price)), 0);
    }
    const totalInstallmentCart = () => {
        const totalPrice = totalPriceCart() / 6;
        return totalPrice.toFixed(2);
    }
    return (
        <CartContext.Provider value={{cart, addProductCart, iconCart, removeItemCart, deleteCart, totalPriceCart, totalInstallmentCart}}>
            {children}
        </CartContext.Provider>
    )
}