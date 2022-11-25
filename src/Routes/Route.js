import DashBoardLayout from "../Layout/DashBoardLayout";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/DashBoard/AddProducts/AddProducts";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: ErrorPage } = require("../Pages/Shared/ErrorPage/ErrorPage");


const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
        
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/addProducts',
                element: <AddProducts></AddProducts>
            }, 
        ]
    }

])

export default router;