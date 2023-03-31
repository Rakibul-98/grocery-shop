import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from '../Pages/Home/Components/Home/Home';
import Login from "../Pages/Login/Login";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/checkout',
                element:<CheckOut/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
        ]
    }
]);