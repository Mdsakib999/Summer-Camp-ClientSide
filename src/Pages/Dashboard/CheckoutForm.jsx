import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';

const CheckoutForm = ({price}) => {
    const {user} = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://summer-camp-server-coral.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setClientSecret(data.clientSecret);
          });
      }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log(error);
            setCardError(error.message)
        }
        else{
            setCardError('')
            console.log("payment", paymentMethod);
        }

        setProcessing(true);

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, 
            {
                payment_method: {
                    card: card,
                    billing_details:{
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown'

                    },
                },
            });

            if(confirmError){
                console.log(confirmError);
            }

            console.log(paymentIntent);

            setProcessing(false);

            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id);
                // const transactionId = paymentIntent.id

                const paymentDetails = {
                    email: user?.email,
                    price,
                    date: new Date(),
                    transactionId: paymentIntent.id
                }
    
                fetch("https://summer-camp-server-coral.vercel.app/payments", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(paymentDetails),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        
                      });
            }


}

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded mt-6" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        {transactionId && <p className="text-green-500 text-center"> <i className="fa-solid fa-circle-check text-7xl"></i> <br /> Transaction completed successFully!!! <br /> Transaction Id: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;