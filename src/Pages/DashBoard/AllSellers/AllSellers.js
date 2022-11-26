import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';

const AllSellers = () => {
    const url = 'http://localhost:5000/allUsers/Seller'

    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['Seller',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return<Loading></Loading>
    }
    console.log(sellers)
    return (
        <div>
            <h1>All sellers {sellers.length}</h1>
            <div >
                <h3 className='text-3xl my-5 text-center text-primary'>My Orders</h3>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Seller Image</th>
                                <th>Seller Name</th>
                                <th>Seller Email</th>
                                <th>Verify</th>
                                <th>Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {
                                sellers?.map((seller, index) => <tr className="hover"
                                    key={seller._id}>
                                    <th>{index + 1}</th>
                                    <td>{seller?.name}</td>
                                    <td>{seller?.name}</td>
                                    
                                    
                                        {/* {
                                            order?.price && !order?.paid && <Link

                                                to={`/dashBoard/payment/${order._id}`}
                                            >
                                                <button className='btn btn-sm btn-primary text-white'>Pay</button>

                                            </Link>
                                        }

                                        {
                                            order?.price && order.paid && <span className='text-green-500'>Paid</span>
                                        } */}


                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;