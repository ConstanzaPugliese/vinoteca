import { useState, createContext, useContext } from 'react';

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addProductCart = (product, quantity) => {
        if (isInCart(product.id)) {
            const updateCart = [...cart];
            updateCart.forEach((e) => {
                if(e.product.id === product.id) {
                    e.quantity += quantity;
                }
            })
            setCart(updateCart)
        } else {
            setCart([...cart, {product, quantity}])
        }
    }
    const isInCart = (id) => {
        return cart.find(e => e.product.id === id)
    }
    const iconCart = () => {
        return cart.reduce((acum, value) => acum + value.quantity, 0);
    }
    const removeItemCart = (id) => {
        const removeFilter = cart.filter(e => e.product.id !== id)
        return setCart(removeFilter);
    }
    const deleteCart = () => setCart([])
    const priceWithDiscount = (product) => {
        const discount = (product.discount * product.price) / 100
        const finalPrice = product.price - discount
        return finalPrice
    }
    const installmentWithDiscount = (product) => {
        const discount = (product.discount * product.price) / 100
        const finalPrice = product.price - discount
        const finalInstallment = finalPrice / 6;
        return finalInstallment.toFixed(2);
    }
    const totalPriceCart = () => {
        return cart.reduce((acum, value) => (acum + (value.quantity * value.product.price)), 0);
    }
    const totalInstallmentCart = () => {
        const totalPrice = totalPriceCart() / 6;
        return totalPrice.toFixed(2);
    }
    return (
        <CartContext.Provider value={{cart, addProductCart, iconCart, removeItemCart, deleteCart, priceWithDiscount, installmentWithDiscount, totalPriceCart, totalInstallmentCart}}>
            {children}
        </CartContext.Provider>
    )
}