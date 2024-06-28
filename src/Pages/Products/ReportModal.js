import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const ReportModal = ({ singleProduct, SetSingleProduct } ) => {
    
    const {user} = useContext(AuthContext)
    const {  productName, _id } = singleProduct

    const reportHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;


        const reportInfo = {
            productName:productName,
            ProductId: _id,
            name,
            email,
            message
            
        }
        fetch('https://minimalfurniture.vercel.app/addReport', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    SetSingleProduct(null)
                    toast.success('Reported SuccessFully');
                    // refetch();
                }
                else {
                    toast.error(data.message);
                }

            })
       
        
    }

    return (
        <div >
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>

                    <form onSubmit={reportHandler} className='grid grid-cols-1 gap-3 mt-10'>
                        

                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your name" className="input w-full  input-bordered" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full  input-bordered" />
                        <textarea name="message" className="textarea textarea-bordered" placeholder="Report Message" required></textarea>
                       <br />
                        <input disabled={user === null} type="submit" value="submit" className="input w-full  input-bordered btn bg-gradient-to-r from-purple-400 to-sky-500 text-white" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ReportModal;