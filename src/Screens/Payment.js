import React from 'react'
import PaymentForm from '../components/PaymentForm'
const Payment = ({curruser,cart,subTotal}) => {
  return (
    <div>
    <div className="second   w-full flex m-auto ">
    
          <PaymentForm
            curruser={curruser}
            cartItems={cart}
            subTotal={subTotal}
          />
        
      </div>
    </div>
  )
}

export default Payment