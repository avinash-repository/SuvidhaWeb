import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Stripe:', stripe);
        console.log('Elements:', elements);

        if (!stripe || !elements) {
            console.error('Stripe or Elements not loaded');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/create-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amount }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const { clientSecret } = data;

            if (!clientSecret) {
                throw new Error('Client secret not returned');
            }

            // Confirm the payment on the client
            const cardElement = elements.getElement(CardElement);
            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: cardElement,
                    },
                }
            );

            if (stripeError) {
                console.error('Stripe error:', stripeError);
            } else if (paymentIntent.status === 'succeeded') {
                console.log('Payment successful!');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const cardStyle = {
        style: {
            base: {
                color: 'white',
                fontSize: '18px', // Increase the font size
                '::placeholder': {
                    color: 'white',
                },
                border: '1px solid white', // Add a white border
                padding: '10px', // Add padding for better spacing
            },
            invalid: {
                color: 'red',
            },
        },
    };

    return (
        <>
            <div className='text-center  m-[2rem] text-[2rem] font-bold'>
                <h1>Payment Gateway </h1>
            </div>

        <div className='flex justify-center text-center lg:m-[4rem] text-white m-[1rem] p-[1rem] lg:p-[5rem] bg-gray-800'>
        
            <form onSubmit={handleSubmit}>
                <h1 className='mt-[2rem] mb-[4rem] text-2xl font-semibold'>
                 You can pay with any card 
                </h1>
                Amount
                <input
                    className='p-2 text-black uppercase w-full mb-[4rem]'
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
                <div className='text-white pb-[1rem] '>
                    <CardElement options={cardStyle} />
                </div>
                <button
                    type="submit"
                    disabled={!stripe || !elements}
                    className="relative p-2 bg-green-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-green-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden"
                >
                    <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
                    Proceed
                </button>
            </form>
        </div>
        </>
    );
}
