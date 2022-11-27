import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';

const AllBuyers = () => {
    const url = 'http://localhost:5000/allUsers/Buyer'

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['Buyer',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const handelDeleteBuyer = buyer => {
        const proceed = window.confirm(
            "Are you sure, you want to delete this buyer"
        );
        if (proceed) {
            fetch(`http://localhost:5000/users/${buyer._id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Seller Delete SuccessFully')
                        refetch();

                    }
                    console.log(data)

                })
            
        }
     

    }
    const handelVerify = id => {
        console.log(id)
        
     
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('verify Successfully')
                    refetch();
                }
            })
            
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <h3 className='text-3xl my-5 text-center text-primary'>Numbers Of Buyers are {buyers.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Buyer Image</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Verify</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers?.map((buyer, index) => <tr className="hover"
                                key={buyer._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={buyer?.photoUrl} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td>
                                    {buyer?.verify === "true" ?
                                        <p className='text-primary'>Verified</p>
                                        :
                                        <button onClick={() => handelVerify(buyer._id)} className='btn btn-sm btn-primary text-white'>Verify</button>
                                    }
                                
                                
                                </td>
                                <td><button onClick={() => handelDeleteBuyer(buyer)} className='btn btn-sm bg-red-400 text-white'>Delete</button></td>






                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;