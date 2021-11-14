import { createContext, useContext, useState, useEffect } from 'react';

export const ShopCartContext = createContext({
    myCart: {},
    addToMyCart: () => {},
    removeFromCart: () => {},
    total: 0,
});

export const ShopCartState = ({children}) =>{
    const [myCart, setMyCart] = useState({});
    const [total, setTotal] = useState(0);

    const addToMyCart = (productId, productdata, qty = 1) => {
        setMyCart( prevState => ({
            ...prevState,
            [productId]: {...productdata, qty}
        }));
    };

    const removeFromCart = (id) => {
        if(!(id in myCart)) return

        setMyCart( prevState => {
            const newState = {...prevState}
            delete newState[id]
            return newState
        } )
    }
    
    useEffect(() => {

        if(Object.entries(myCart).length > 0){
            setTotal( 
                Object.values(myCart)
                .map(item => ( item.qty * item.price ) )
                .reduce( (previousValue, currentValue) => previousValue + currentValue ).toFixed(2)
            )            
        };

    }, [myCart])

    return(
        <ShopCartContext.Provider value={{
            myCart,
            addToMyCart,
            removeFromCart,
            total
        }}>
            {children}
        </ShopCartContext.Provider>
    )
}

export const useMyCartContext = () => useContext(ShopCartContext);