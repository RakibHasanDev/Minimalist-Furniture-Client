import DashBoardLayout from "../Layout/DashBoardLayout";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/DashBoard/AddProducts/AddProducts";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AllReports from "../Pages/DashBoard/AllReports/AllReports";
import AllSellers from "../Pages/DashBoard/AllSellers/AllSellers";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
            },
            {
                path: '/products/:name',
                loader: ({ params }) => fetch(`https://server-site-coral.vercel.app/products/${params.name}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }
            
        ]
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element:<MyOrders></MyOrders>
        },
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            }, 
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            }, 
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            }, 
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }, 
            {
                path: '/dashboard/allReports',
                element: <AdminRoute><AllReports></AllReports></AdminRoute>
            }, 
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://server-site-coral.vercel.app/orders/${params.id}`),
                
                
            }, 

           
            
        ]
    }

])

export default router;