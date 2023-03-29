import React, { createContext, useState } from 'react';

export const ProductContext = createContext([]);

const ProductsProvider = ({children}) => {
    const [savedProducts, setSavedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    const value ={
        savedProducts, 
        setSavedProducts,
        cartProducts, 
        setCartProducts
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;