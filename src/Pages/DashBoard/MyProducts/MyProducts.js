import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `https://minimalfurniture.vercel.app/products?email=${user?.email}`

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    // console.log(myProducts)

    const handelDeleteProduct = product => {
        console.log(product)
        // console.log(product)
        const proceed = window.confirm(
            `Are you sure, you want to delete  ${product.productName} ?`
        );

        if (proceed) {
            fetch(`https://minimalfurniture.vercel.app/products/${product._id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`Product ${product.productName} delete successFully`)
                        refetch();

                    }
                    console.log(data)

                })
    }
    }


    const handelAdvertise = (product) => {
        // console.log(product)

        fetch(`https://minimalfurniture.vercel.app/products/advertise/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Advertise SuccessFully')
                    refetch();
                }

                else if (data.matchedCount > 0) {
                    toast.error('Already Advertised')
                    refetch();
                }
            })
    }
   

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-5 mb-10'>
            <h1 className='text-2xl text-blue-600 text-center'> The Number Of My Products are {myProducts?.length}</h1>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 w-11/12 mx-auto'>

                {
                    myProducts.map(product => <MyProductCard
                        key={product._id}
                        product={product}
                        handelDeleteProduct={handelDeleteProduct}
                        handelAdvertise={handelAdvertise}
                    ></MyProductCard>)
                }

            </div>
        </div>
    );
};

export default MyProducts;