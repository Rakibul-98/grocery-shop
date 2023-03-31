import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext([]);

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    // const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchedItem, setSearchedItem] = useState([]);


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

    const handleMenuProduct = (category) => {
        setCategoryProducts(products.filter(p => p.category === category));
    }

    const handleSearchProduct = () => {
        const searchBox = document.getElementById("searchBox");

        const searchCardStyle = document.getElementById("search-item-card").style;

        const searchAlert = document.getElementById("search-bar-alert");

        const newItem = (products.find(p => p.name.toLowerCase().match(searchBox.value.toLowerCase())));

        if (searchBox.value && newItem) {
            searchAlert.style.display = "none";
            setSearchedItem(newItem);
            searchCardStyle.display = "block";
        }
        else {
            searchAlert.style.display="block";
            if (searchBox.value === "") {
                searchAlert.innerHTML=`<p>Warning: Search box can not be empty !!!</p>`;
            }
            else {
                searchAlert.innerHTML=`<p>Item not found !!!<br/>Please try another item.</p>`;
            }
            searchCardStyle.display = "none";
        }
        searchBox.value = '';
    }

    const value = {
        products,
        cartProducts,
        savedProducts,
        handleMenuProduct,
        categoryProducts,
        handleSearchProduct,
        searchedItem,
        handleAdd
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;