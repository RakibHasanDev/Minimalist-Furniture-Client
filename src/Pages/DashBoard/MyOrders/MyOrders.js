import React, { useContext } from 'react';
import { useQuery } from 'react-query';
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
     console.log(myOrders)
    return (
        <div>
            <h3 className='text-3xl my-5 text-center text-primary  '>My Appointment</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders?.map((order, index) => <tr className="hover"
                                key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.ProductTitle ? order.ProductTitle : 'No Name'}</td>
                                <td>{order.price}</td>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                {/* <td>
                                        {
                                            book?.price && !book?.paid && <Link

                                                to={`/dashBoard/payment/${book._id}`}
                                            >
                                                <button className='btn btn-sm btn-primary'>Pay</button>

                                            </Link>
                                        }

                                        {
                                            book?.price && book.paid && <span className='text-green-500'>Paid</span>
                                        }


                                    </td> */}

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;