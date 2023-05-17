import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from '../Pages/Home/Components/Home/Home';
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import Review from "../Pages/Review/Review";
import PrivateRoutes from "./PrivateRoutes";

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
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/checkout',
                element:<CheckOut/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
        ]
    },
    {
        path:'/review',
        element:<PrivateRoutes><Review/></PrivateRoutes>
    }
]);