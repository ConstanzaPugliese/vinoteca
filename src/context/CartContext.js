import { useState, createContext, useContext } from 'react';

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addProductCart = (item, quantity) => {
        let prodIndex = cart.findIndex((e) => e.item.id === item.id);
        if (prodIndex === -1) {
            setCart((cart) => [...cart, { item: item, quantity: quantity }]);
        } else {
            let modifiedCart = [...cart];
            modifiedCart[prodIndex].cant += quantity;
            setCart(modifiedCart);
        }
    }; 
    // const addProductCart = (item, quantity) => {
    //     if (isInCart(item.id)) {
    //         const updateCart = [...cart];
    //         updateCart.forEach(e => {
    //             if (e.item.id === item.id) {
    //                 e.quantity += quantity
    //             }
    //         });
    //         setCart(updateCart)
    //     } else {
    //         setCart([...cart, {item, quantity}])
    //     }
    // }
    // const isInCart = (id) => {
    //     return cart.find(e => e.item.id === id)
    // }
    // const addProductCart = (item, quantity) => {
    //     const index = cart.findIndex(e => e.item.id === item.id)
    //     if (index > -1) {
    //         const oldQy = cart[index].quantity
    //         cart.splice(index, 1)
    //         setCart([...cart, { item, quantity: quantity + oldQy}])
    //     } else {
    //         setCart([...cart, {item, quantity}])
    //     }
    // }
    const iconCart = () => {
        return cart.reduce((acum, value) => acum + value.quantity, 0);
    }
    const removeItemCart = (id) => {
        const removeFilter = cart.filter(e => e.item.id !== id)
        return setCart(removeFilter);
    }
    const deleteCart = () => setCart([])
    const totalPriceCart = () => {
        return cart.reduce((acum, value) => (acum + (value.quantity * value.item.price)), 0);
    }
    const totalInstallmentCart = () => {
        return totalPriceCart() / 6;
    }
    return (
        <CartContext.Provider value={{cart, addProductCart, iconCart, removeItemCart, deleteCart, totalPriceCart, totalInstallmentCart}}>
            {children}
        </CartContext.Provider>
    )
}