import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = 
loadStripe('pk_test_51L1gB4KrIq6fnqAr2W94W1MCAE2yLNGqkNXl8WzrKJnRc0jassnYzqCuLWfh6IcoUrHvcWHlBVHb4wQ2VqRPterp00qblFYzjJ');
const Payment = () => {
  const { id } = useParams();
  const url = `https://radiant-inlet-73945.herokuapp.com/booking/${id}`;

  const { data: bookingItem, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(bookingItem);
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {bookingItem?.customerName}</p>
          <h2 class="card-title">Please Pay for {bookingItem?._id}</h2>

          <p>Please pay: {bookingItem?.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm bookingItem={bookingItem} />
            
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
