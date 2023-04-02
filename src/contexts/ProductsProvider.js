import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext([]);

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [searchedItem, setSearchedItem] = useState([]);
    const [alertText, setAlertText] = useState('');



    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addAlert = (type) => {
        const successAlert = document.getElementById("success-alert");
        const warningAlert = document.getElementById("warning-alert");
        if (type === "warning") {
            successAlert.style.display = "none";
            warningAlert.style.display = "block";
            setAlertText("Item already added");
        }
        else if(type === "success"){
            warningAlert.style.display = "none";
            successAlert.style.display = "block";
            setAlertText("Item is successfully added!!");
        }
    }

    const handleAdd = (p_id, type) => {

        products.forEach(product => {
            if (product.id === p_id) {
                if (type === "fav") {
                    const newProducts = [...savedProducts, product];
                    if (savedProducts.some(p => p.id === p_id)) {
                        addAlert("warning");
                    }
                    else {
                        setSavedProducts(newProducts);
                        addAlert("success");
                    }
                }
                else if (type === "cart") {
                    const newProducts = [...cartProducts, product];
                    if (cartProducts.some(p => p.id === p_id)) {
                        addAlert("warning")
                    }
                    else {
                        setCartProducts(newProducts);
                        addAlert("success");
                    }
                }
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
            searchAlert.style.display = "block";
            if (searchBox.value === "") {
                searchAlert.innerHTML = `<p>Warning: Search box can not be empty !!!</p>`;
            }
            else {
                searchAlert.innerHTML = `<p>Item not found !!!<br/>Please try another item.</p>`;
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
        handleAdd,
        alertText
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;