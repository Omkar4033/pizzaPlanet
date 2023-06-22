import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import Spinner from "./Spinner"
const stripePromise = loadStripe(
  "pk_test_51MfQSHSBGOkkt5PzZgKErm86dw8LUj6EdhvULzoLf060lnQvWeHWBYhNxyLF8jd0cjB2G33o8L1Iy6QGfdYFEDCg00lRlxT1tf"
);

const PaymentForm = ({ curruser,cartItems, subTotal, setShowpayment ,formData,RemoveAll}) => {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [Loading,setLoading]=useState(false);

  return (
    <div className="w-full  rounded-lg flex-col max-h-max shadow-orange-200 max-w-sm border  p-8">
     <div className="">
     <span className="flex  mx-auto">
        <img
          style={{ background: "white", objectFit: "fill" }}
          width={"42px"}
          height="8px"
          alt="Img"
          src={process.env.PUBLIC_URL + "Images/logo.jpg"}
        />
        <h1 className="text-2xl font-bold mb-4">Card Details</h1>
      </span>
     { Loading && !paymentComplete   ? <Spinner/> : <Elements stripe={stripePromise}>
        <Checkout
        formData={formData}
          curruser={curruser}
          cartItems={cartItems}
          subtotal={subTotal}
          onPaymentComplete={setPaymentComplete}
          onPaymentError={setPaymentError}
          setLoading={setLoading}
          RemoveAll={RemoveAll}
        />
      </Elements>
      }
     </div>
     
     { paymentComplete && window.location.assign('/confirmation')}
     
      {paymentError && <p className="text-red-500">{paymentError}</p>}
    </div>
  );
};

export default PaymentForm;
