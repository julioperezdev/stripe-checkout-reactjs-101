import React from "react"

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./Particular-card.css"


let stripePromise 

const getStripe = () =>{
    if(!stripePromise){
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    }

    return stripePromise
}

const Paticular_Card = ({title, imageUrl, price, currency, stripePrice}) =>{

    const item = {
        price : stripePrice,
        quantity: 1
    }

    const checkoutOptions = {
        lineItems : [item],
        mode : "subscription",  //other alternative -> "payment"
        successUrl : `${window.location.origin}/success`,
        cancelUrl : `${window.location.origin}/cancel`
    }

    const redirectToCheckout = async() =>{
         console.log("redirect")
         console.log(stripePrice)
          const stripe = await getStripe()
          const {error} = await stripe.redirectToCheckout(checkoutOptions)
          console.log("Stripe checkout error", error)
           
    }

    return(
<       div className="particular-card-global">
            <h1>{title}</h1>
            <img src={imageUrl}/>
            <p>{price} {currency}</p>
            <button onClick={redirectToCheckout}>comprar</button>
        </div>
    )
}

export default Paticular_Card;
