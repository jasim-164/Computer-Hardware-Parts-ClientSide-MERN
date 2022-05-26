import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [bookings, setBooking] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(` http://localhost:8000/booking?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setBooking(data);
                });
        }
    }, [user]);

    return (
        <div>
        <h2>My Appointments: {bookings.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer Name</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>User Email</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((value, index) => <tr key={value._id}>
                            <th>{index + 1}</th>
                            <td>{value?.customerName}</td>
                            <td>{value?.productName}</td>
                            <td>{value?.quantity}</td>
                            <td>{value?.email}</td>
                            {(!value?.price && !value.paid) && <Link to={`/dashboard/payment/${value._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                            <td> {(value.price && value.paid) && <div>
                                <p><span className='text-success'>Paid</span></p>
                                <p>Transaction id: <span className='text-success'>{value.transactionId}</span></p>
                            </div>}</td>
                      
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;