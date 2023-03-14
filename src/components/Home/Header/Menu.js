import { Accordion } from 'flowbite-react';
import React from 'react';
import { FaBars } from "react-icons/fa";

const Menu = () => {

    const category =[
        {
            id:1,
            name:"Fresh Meat"
        },
        {
            id:2,
            name:"Vegetables"
        },
        {
            id:3,
            name:"Fruits"
        },
        {
            id:4,
            name:"Sea Food"
        },
        {
            id:5,
            name:"Protein"
        },
        {
            id:6,
            name:"Herbs and spices"
        },
        {
            id:7,
            name:"Juice"
        },
        {
            id:8,
            name:"Ice cream"
        }
    ]

    return (
        <div>
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title className='bg-emerald-500 text-white hover:text-black h-14'>
                        <div className='flex items-center'>
                            <span><FaBars/></span>
                            <p className='ml-5'>All Category</p>
                        </div>
                    </Accordion.Title>
                    <Accordion.Content>
                        <ul>
                            {
                                category.map(c=>
                                    <li className='pt-5 font-semibold hover:text-emerald-500 hover:cursor-pointer' key={c.id}>{c.name}</li>
                                )
                            }
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Menu;