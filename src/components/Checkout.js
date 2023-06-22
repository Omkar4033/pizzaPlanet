import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const Checkout = ({
  curruser,
  subtotal,
  cartItems,
  onPaymentComplete,
  onPaymentError,
  formData,
  setLoading,
  RemoveAll
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: formData?.firstName + " " + formData?.lastName,
        email: formData?.email,
        address: {
          line1: formData?.streetAddress,
          city: formData?.city,
          state: formData?.state,
          postal_code: formData.zipCode,
          country: "US",
        },
      },
    });

    if (!error) {
      setLoading(true);
      try {
        const response = await axios.post("/api/orders/placeorder", {
          curruser: curruser || "omkar Raghu",
          subtotal: subtotal,
          payment_method: paymentMethod.id,
          cartItems: cartItems,
          currency: "inr",
        });
        onPaymentComplete(true);
        setLoading(false);
        RemoveAll();
        console.log(response.data);
      } catch (error) {
        setErrorMessage(error.message);
        onPaymentComplete(false);
      }
    } else {
      setErrorMessage(error.message);
      onPaymentComplete(false);
      onPaymentError(error.message);
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
    },
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="card-element"
          className="block text-gray-700 font-bold mb-2"
        >
          Credit or debit card
        </label>
        <div className="p-2 border border-gray-300 rounded">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>
      {errorMessage && (
        <div className="text-red-500 font-bold mb-4">{errorMessage}</div>
      )}
      <button
        type="submit"
        className="bg-green-500  block mx-auto hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        disabled={!stripe}
      >
        Pay ₹{subtotal}
      </button>
    </form>
  );
};

export default Checkout;
