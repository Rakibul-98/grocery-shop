import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext([]);

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAdd = (p_id, type) => {
        products.forEach(product => {
            if (product.id === p_id && type === "fav") {
                const newProducts = [...savedProducts, product];
                setSavedProducts(newProducts);
            }
            else if (product.id === p_id && type === "cart") {
                const newProducts = [...cartProducts, product];
                setCartProducts(newProducts);
            }
        });
    }

    const value ={
        products,
        savedProducts, 
        setSavedProducts,
        cartProducts, 
        setCartProducts,
        handleAdd
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;