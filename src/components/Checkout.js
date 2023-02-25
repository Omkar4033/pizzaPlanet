import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
const Checkout = ({subtotal,cartItems,curruser}) => {


const tokenHandler=async(token)=>{
    try {
        const res=await axios.post('/api/orders/placeorder',{token,subtotal,curruser,cartItems});
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div>
        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey='pk_test_51MfQSHSBGOkkt5PzZgKErm86dw8LUj6EdhvULzoLf060lnQvWeHWBYhNxyLF8jd0cjB2G33o8L1Iy6QGfdYFEDCg00lRlxT1tf'
        >
            <button className='bg-green-500  text-white px-4 rounded-md py-2 mt-4' >
                pay now
            </button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout