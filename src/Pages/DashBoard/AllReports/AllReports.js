import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';

const AllReports = () => {
    const url = `http://localhost:5000/allReports`

    const { data: allReports = [], isLoading, refetch } = useQuery({
        queryKey: ['allReports'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const handelDeletProduct = (report) => {

        const proceed = window.confirm(
            `Are you sure, you want to delete ?`
        );

        if (proceed) {
            fetch(`http://localhost:5000/allReports/${report._id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {

                        fetch(`http://localhost:5000/products/${report.ProductId}`, {
                            method: 'DELETE',

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount) {
                                    toast.success('product delete successFully')
                                    refetch()
                                }
                        })
                    }
                    // console.log(data)

                })
        }
       

   }
    console.log(allReports)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div mt-5>
            <h1 className='text-3xl text-center'>All Report {allReports.length}</h1>

            <div className="overflow-x-auto mt-3">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Reported Message</th>
                            <th>Delete Product</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allReports?.map((report, index) => <tr className="hover"
                                key={report._id}>
                                <th>{index + 1}</th>
                                <td>{report.productName}</td>
                                <td>{report.name}</td>
                                <td>{report.email}</td>
                                <td>{report.message}</td>
                                <td><button onClick={() => handelDeletProduct(report)} className='btn btn-sm bg-red-400 text-white'>Delete</button></td>
                                

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReports;