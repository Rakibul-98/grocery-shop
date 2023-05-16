import React, { createContext, useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../cartManagement/cartManagement';
import { toast } from 'react-hot-toast';

export const ProductContext = createContext([]);

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [searchedItem, setSearchedItem] = useState([]);


    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === parseInt(id));
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCartProducts(savedCart);
    },[products])

    const addToCart = (selectedProduct) =>{
        let newCart =[];
        const exists = cartProducts.find(product => product.id === selectedProduct.id);
        if(!exists){
            toast.success("Item added successfully")
            selectedProduct.quantity = 1;
            newCart = [...cartProducts, selectedProduct];
        }
        else{
            toast.error("Item already in cart")
            const remaining = cartProducts.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, exists];
        }
        setCartProducts(newCart);
        console.log(cartProducts.length)
        addToDb(selectedProduct.id);
    }


    const handleAdd = (p_id, type) => {

        products.forEach(product => {
            if (product.id === p_id) {
                if (type === "fav") {
                    const newProducts = [...savedProducts, product];
                    if (savedProducts.some(p => p.id === p_id)) {
                    }
                    else {
                        setSavedProducts(newProducts);
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
        addToCart
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;