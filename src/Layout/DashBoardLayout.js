import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useSeller from '../Hooks/useSeller';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                   <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                       


                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashBoard/addProducts'>Add Products </Link></li>
                               
                            </>

                        }
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default DashBoardLayout;