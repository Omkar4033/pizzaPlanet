import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51MfQSHSBGOkkt5PzZgKErm86dw8LUj6EdhvULzoLf060lnQvWeHWBYhNxyLF8jd0cjB2G33o8L1Iy6QGfdYFEDCg00lRlxT1tf"
);

const PaymentForm = ({ curruser,cartItems, subTotal, setShowpayment }) => {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  return (
    <div className="w-full rounded-lg flex-col  shadow-orange-200 max-w-sm border  p-8">
      <span className="flex  mx-auto">
        <img
          style={{ background: "white", objectFit: "fill" }}
          width={"42px"}
          height="8px"
          alt="Img"
          src={process.env.PUBLIC_URL + "Images/logo.jpg"}
        />
        <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
      </span>
      <Elements stripe={stripePromise}>
        <Checkout
          curruser={curruser}
          cartItems={cartItems}
          subtotal={subTotal}
          onPaymentComplete={setPaymentComplete}
          onPaymentError={setPaymentError}
        />
      </Elements>
      <span
        onClick={() => setShowpayment(false)}
        className="underline mx-auto my-6"
      >
        close
      </span>
      {paymentComplete && <p className="text-green-500">Payment complete!</p>}
      {paymentComplete && <Link className='underline-offset-1' to='/confirmation'>go to confirmation page</Link>}
      {paymentError && <p className="text-red-500">{paymentError}</p>}
    </div>
  );
};

export default PaymentForm;
