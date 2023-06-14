import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const Payment = () => {
    const totalPrice = useParams();
    const price = Number(totalPrice.price);
   
    // console.log(numberPrice,typeof(numberPrice))


    return (
        <div>
            <h1 className="text-center mx-auto w-[55%] mt-6 text-3xl font-bold border-b-4 pb-3 mb-20">Give your card details & Complete your Payment</h1>


            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;