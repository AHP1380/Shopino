import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { getBasketTotal } from '../Reducer/Reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import "./Payment.css";
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import axios from '../Axios/Axios';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";




function Payment() {

    const [{ basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded]  = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] =  useState(true);
    
    useEffect(() => {
        //generate the special stripe secret which allows to charge the customer
        //but whenever the basket changes we need to a new stripe secret
        
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expect the total in a currencies subunits
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        
        //that how we call a function inside a useEffect (code below )
        getClientSecret();
    },[basket])
    //basket will changes in the above square bracket.
    console.log('the secret is',clientSecret);
    

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {

        //do all fancy stripe stuff.....
        event.preventDefault();
        //after clicking buy now button the below function will disable the button and doesn't allow user to click button many times
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            //if that was correct and everything was good then we have the code below
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate('/orders' , {replace: true});
        })
        


    }

    const handleChange = event => {
        //Listen for changes in card elements
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        //if the form is empty the button will be disabled
        setError(event.error ? event.error.message : "")
        //if there is some errors with the cards details show the error message otherwise show nothing 

    }

  return (

        <div className="Payment">
            <div className="Payment-container">
                <h1>
                    بررسی (<Link to="/checkout">
                        {basket?.length} کالا
                    </Link>)               
                 </h1>
                {/* Payment section => Delivery address */}
                    <div className="Payment-section">
                        <div className="Payment-title">
                           <h3>
                               آدرس
                            </h3> 
                        </div>
                        <div className="Payment-address">
                            <p>
                                {user?.email}
                            </p>
                            <p>
                                کرمان میدان پژوهش
                            </p>
                            <p>
                                دانشگاه شهید باهنر ساختمان s بخش مهندسی کامپیوتر 
                            </p>
                        </div>
                    </div>
                {/* Payment section => Review items */}
                    <div className="Payment-section">
                        <div className="Payment-title">
                            <h3>
                                کالاهای انتخاب شده 
                            </h3>
                        </div>
                        <div className="Payment-items">
                            {basket.map (item => (
                                <CheckoutProduct
                                    Id={item.Id}
                                    Title={item.Title}
                                    Image={item.Image}
                                    Price={item.Price}
                                    Rate={item.Rate}
                                />
                            ))}
                        </div>
                    </div>
                {/* Payment section => Payment method */}
                    <div className="Payment-section">
                        <div className="Payment-title">
                            <h3>
                                نحوه پرداخت
                            </h3>
                        </div>
                        <div className="Payment-details">
                                {/* Stripe magic will go */}
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange} />
                                    <div className="payment-price-container">
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <h3>
                                                        جمع کل : {value}
                                                    </h3>
                                                    
                                                </>
                                            )}
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                            <button disabled={processing || disabled || succeeded}>
                                                    <span>
                                                        {processing ? <p>processing</p> : "خرید"}
                                                    </span>
                                            </button>
                                    </div>
                                    {/* Errors */}
                                    {error && <div>{error}</div>}
                                </form>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Payment