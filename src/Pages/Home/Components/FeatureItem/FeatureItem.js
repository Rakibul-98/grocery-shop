import React from 'react';
import { BsBagDash} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const FeatureItem = () => {

    const products =[
        {
            id:1,
            img:"https://i.ibb.co/2ysgLsT/mango-2.jpg",
            title:"Mango",
            price:"20",
        },
        {
            id:2,
            img:"https://i.ibb.co/P5fvrHb/basil.jpg",
            title:"Basil",
            price:"10",
        },
        {
            id:3,
            img:"https://i.ibb.co/JsHr4FN/capcicum.jpg",
            title:"Bell Paper",
            price:"15",
        },
        {
            id:4,
            img:"https://i.ibb.co/wKqBCzQ/tomato.jpg",
            title:"Tomato",
            price:"10",
        },
        {
            id:5,
            img:"https://i.ibb.co/s6gm8Q3/ginger.jpg",
            title:"Ginger",
            price:"13",
        },
        {
            id:6,
            img:"https://i.ibb.co/jH2hrN3/corn.jpg",
            title:"Corn",
            price:"10",
        },
        {
            id:7,
            img:"https://i.ibb.co/Nn5JtKL/papaya.jpg",
            title:"Papaya",
            price:"20",
        },
        {
            id:8,
            img:"https://i.ibb.co/S5kvBbX/onion.jpg",
            title:"Onion",
            price:"13",
        },
    ]

    const cartIcon =[
        {
            id:1,
            icon:<AiOutlineHeart/>
        },
        {
            id:2,
            icon:<BsBagDash/>
        }
    ]

    const handleGoTop=()=>{
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = () => {scrollFunction()};
    const scrollFunction=()=>{
        if (document.documentElement.scrollTop > 20) {
            document.getElementById("top-btn").style.display="block";
        } 
        else {
            document.getElementById("top-btn").style.display="none";
        }
    }

    return (
        <div className='my-20'>
            <div className='group'>
                <h1 className='text-center text-4xl font-semibold'>Feature Products</h1>
                <hr className='w-2/12 md:w-1/12 mx-auto h-1 bg-emerald-500 md:group-hover:w-2/12 group-hover:w-8/12 transition-width duration-500 ease-in-out mt-2'></hr>
            </div>
            <div className='grid w-9/12 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto mt-10'>
                {
                    products.map(p=>
                        <div key={p.id} className='relative group hover:shadow-xl rounded-lg'>
                            <img className='rounded-t-lg' src={p.img} alt={p.title} />
                            <div className='text-2xl group-hover:flex justify-center hidden -mt-12'>
                                {
                                    cartIcon.map(ci=>
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
            <div id='top-btn' className='animate-bounce hover:animate-none fixed bottom-5 right-5'>
                <span className='text-4xl text-black hover:text-orange-500 hover:cursor-pointer' onClick={handleGoTop}><FaRegArrowAltCircleUp/></span>
            </div>
        </div>
    );
};

export default FeatureItem;