import React from 'react';
import { BsBagDash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from '../../Pages/Cart/Cart';

const Shop = () => {

    const products = [
        {
            id: 1,
            img: "https://i.ibb.co/2ysgLsT/mango-2.jpg",
            title: "Mango",
            price: "20",
        },
        {
            id: 2,
            img: "https://i.ibb.co/P5fvrHb/basil.jpg",
            title: "Basil",
            price: "10",
        },
        {
            id: 3,
            img: "https://i.ibb.co/JsHr4FN/capcicum.jpg",
            title: "Bell Paper",
            price: "15",
        },
        {
            id: 4,
            img: "https://i.ibb.co/wKqBCzQ/tomato.jpg",
            title: "Tomato",
            price: "10",
        },
        {
            id: 5,
            img: "https://i.ibb.co/s6gm8Q3/ginger.jpg",
            title: "Ginger",
            price: "13",
        },
        {
            id: 6,
            img: "https://i.ibb.co/jH2hrN3/corn.jpg",
            title: "Corn",
            price: "10",
        },
        {
            id: 7,
            img: "https://i.ibb.co/Nn5JtKL/papaya.jpg",
            title: "Papaya",
            price: "20",
        },
        {
            id: 8,
            img: "https://i.ibb.co/S5kvBbX/onion.jpg",
            title: "Onion",
            price: "13",
        },
        {
            id: 9,
            img: "https://i.ibb.co/2q0DrNp/strawberry.jpg",
            title: "Strawberry",
            price: "30",
        },
        {
            id: 10,
            img: "https://i.ibb.co/VLhBggy/apple.jpg",
            title: "Apple",
            price: "20",
        },
        {
            id: 11,
            img: "https://i.ibb.co/Y3gc5R9/grape.jpg",
            title: "Grape",
            price: "30",
        },
        {
            id: 12,
            img: "https://i.ibb.co/KhSbcwc/cabbage.jpg",
            title: "Cabbage",
            price: "15",
        },
        {
            id: 13,
            img: "https://i.ibb.co/NVVTPyV/pexels-maxime-lecomte-13473287.jpg",
            title: "Mashroom",
            price: "20",
        },
        {
            id: 14,
            img: "https://i.ibb.co/T20B5qg/pexels-jordan-rushton-13133611.jpg",
            title: "Beetroot",
            price: "10",
        },
        {
            id: 15,
            img: "https://i.ibb.co/6g4WXMR/pexels-jordan-rushton-13133609.jpg",
            title: "Broccoli",
            price: "15",
        },
        {
            id: 16,
            img: "https://i.ibb.co/txx93Jf/pexels-cihan-y-ce-12176059.jpg",
            title: "Coffee bean",
            price: "10",
        },
        {
            id: 17,
            img: "https://i.ibb.co/CHry9n1/pexels-studio-naae-9681172.jpg",
            title: "Passion Fruit",
            price: "13",
        },
        {
            id: 18,
            img: "https://i.ibb.co/R3T381R/pexels-marcelo-verfe-16077079.jpg",
            title: "Coconut",
            price: "10",
        },
        {
            id: 19,
            img: "https://i.ibb.co/ZMkzGR0/pexels-vilnis-husko-13661818.jpg",
            title: "Pickle",
            price: "20",
        },
        {
            id: 20,
            img: "https://i.ibb.co/Vg2H8Vn/pexels-zn-s-food-natureart-8996217.jpg",
            title: "Dates",
            price: "13",
        },
        {
            id: 21,
            img: "https://i.ibb.co/LZbDDtb/pexels-mario-k-12755895.jpg",
            title: "Berry",
            price: "30",
        },
        {
            id: 22,
            img: "https://i.ibb.co/myLHf2k/pexels-jenna-hamra-6123032.jpg",
            title: "Kiwi",
            price: "20",
        },
        {
            id: 23,
            img: "https://i.ibb.co/7v7R8k7/pexels-any-lane-5945911.jpg",
            title: "Pear",
            price: "30",
        },
        {
            id: 24,
            img: "https://i.ibb.co/HVrzH9j/pexels-suzy-hazelwood-1788912.jpg",
            title: "Strawberry(Imported)",
            price: "15",
        },
        {
            id: 25,
            img: "https://i.ibb.co/D4Fb8kh/pexels-mali-maeder-102104.jpg",
            title: "Apple",
            price: "15",
        },
        
    ]

    const cartIcon = [
        {
            id: 1,
            icon: <AiOutlineHeart />
        },
        {
            id: 2,
            icon: <BsBagDash />
        }
    ]

    const navs =[
        {
            id:1,
            name:"All",
            link:"#",
        },
        {
            id:2,
            name:"Meat",
            link:"#",
        },
        {
            id:3,
            name:"Vegetable",
            link:"#",
        },
        {
            id:4,
            name:"Fruits",
            link:"#",
        },
        {
            id:5,
            name:"Sea Food",
            link:"#",
        },
        {
            id:6,
            name:"Herbs",
            link:"#",
        },
        {
            id:7,
            name:"Ice-cream",
            link:"#",
        }
    ]

    return (
        <div className='my-10'>
            <Cart/>
            <div className='group'>
                <h1 className='text-center text-4xl font-semibold'>Products</h1>
                <hr className='w-2/12 md:w-1/12 mx-auto h-1 bg-emerald-500 md:group-hover:w-2/12 group-hover:w-5/12 transition-width duration-500 ease-in-out mt-2'></hr>
            </div>
            <nav className='text-center my-10'>
                {
                    navs.map(n=>
                        <a key={n.id} className='mx-5 font-semibold text-emerald-500 hover:text-black' href={n.link}>{n.name}</a>
                        )
                }
            </nav>
            <div className='grid w-11/12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mx-auto'>
                {
                    products.map(p =>
                        <div key={p.id} className='relative group hover:shadow-xl rounded-lg'>
                            <img className='rounded-t-lg' src={p.img} alt={p.title} />
                            <div className='text-2xl group-hover:flex justify-center hidden -mt-12'>
                                {
                                    cartIcon.map(ci =>
                                        <span key={ci.id} className='mx-2 p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white'>{ci.icon}</span>)
                                }
                            </div>
                            <div className='text-center font-bold mt-2 pb-3'>
                                <p className='text-xl'>{p.title}</p>
                                <p>${p.price}.00</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;