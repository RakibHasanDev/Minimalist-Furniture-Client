import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';

const AllSellers = () => {
    const url = 'http://localhost:5000/allUsers/Seller'

    const { data: sellers = [], isLoading ,refetch} = useQuery({
        queryKey: ['Seller',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const handelDeleteSeller = seller => {
       
        const proceed = window.confirm(
            "Are you sure, you want to delete this Seller"
        );
        if (proceed) {
            fetch(`http://localhost:5000/users/${seller._id}`, {
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

    if (isLoading) {
        return<Loading></Loading>
    }
    // console.log(sellers)
    return (
      <div >
                <h3 className='text-3xl my-5 text-center text-primary'>Numbers Of sellers are {sellers.length}</h3>

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
                                    <td>
                                        <div className="avatar">
                                            <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={seller?.photoUrl} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{seller?.name}</td>
                                    <td>{seller?.email}</td>
                                    <td>{seller?.verify}</td>
                                    <td><button onClick={() => handelDeleteSeller(seller)} className='btn btn-sm bg-red-500'>Delete</button></td>
                                    
                                    
                                     



                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default AllSellers;