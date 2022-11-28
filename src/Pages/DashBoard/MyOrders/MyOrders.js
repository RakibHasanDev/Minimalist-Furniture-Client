import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    //  console.log(myOrders)
    return (
        <div >
            <h3 className='text-3xl my-5 text-center text-primary'>My Orders</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>Meeting Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders?.map((order, index) => <tr className="hover"
                                key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.ProductTitle ? order.ProductTitle : 'No Name'}</td>
                                <td>$ {order.price}</td>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>{order?.location ? order?.location : "No Location"}</td>
                                <td>
                                        {
                                            order?.price && !order?.paid && <Link

                                                to={`/dashboard/payment/${order._id}`}
                                            >
                                                <button className='btn btn-sm btn-primary text-white'>Pay</button>

                                            </Link>
                                        }

                                        {
                                            order?.price && order.paid && <span className='text-green-500'>Paid</span>
                                        }


                                    </td> 

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;