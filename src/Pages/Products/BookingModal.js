import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ singleProduct, SetSingleProduct }) => {
    const { productName, resalePrice } = singleProduct

    const handelBooking = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            ProductTitle: productName,
            price: resalePrice,
            name,
            email,
            phone

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    SetSingleProduct(null)
                    toast.success('Booking Confirmed');
                    // refetch();
                }
                else {
                    toast.error(data.message);
                }

            })
       

        
    }

    const {user} = useContext(AuthContext)
    return (
        <div >
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>

                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={`Price: $ ${resalePrice}`} className="input w-full input-bordered" dis />

                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your name" className="input w-full  input-bordered" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full  input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full  input-bordered" required/> <br />
                        <input disabled={user === null} type="submit" value="submit" className="input w-full  input-bordered btn bg-orange-400" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;