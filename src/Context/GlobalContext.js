import { createContext, useContext, useState } from 'react';

export const ShopCartContext = createContext({
    myCart: {},
    addToMyCart: () => {},
    removeFromMyList: () => {},
});

export const ShopCartState = ({children}) =>{
    const [myCart, setMyCart] = useState({});

    const addToMyCart = (productId, productdata, qty = 1) => {
        
        setMyCart( prevState => ({
            ...prevState,
            [productId]: {...productdata, qty}
        }));
    };

    const removeFromMyList = (product) => {
        if(!(product.id in myCart)) return

        setMyCart( prevState => {
            const newState = {...prevState}
            delete newState[product.id]
            return newState
        } )
    }

    return(
        <ShopCartContext.Provider value={{
            myCart,
            addToMyCart,
            removeFromMyList,
        }}>
            {children}
        </ShopCartContext.Provider>
    )
}

export const useMyCartContext = () => useContext(ShopCartContext);