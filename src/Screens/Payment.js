import React,{useState} from 'react'
import PaymentForm from '../components/PaymentForm'
const Payment = ({curruser,cart,subTotal}) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [showpayment, setShowpayment] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div>
    <div className="   w-full flex-col justify-center ">
    <h1 className="text-3xl font-bold mt-5 mx-10 mb-6">Payment Details:</h1>
    <div className="flex">
    <div className="w-1/2 flex justify-around  rounded-xl  bg-white mt-1 pt-4">
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <h2 className="text-lg font-medium mb-4">Billing Address</h2>
      <div className="flex p-2">
        
      <div className="mb-4">
        <label htmlFor="firstName" className="block font-medium mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mx-8 font-medium mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="shadow mx-6 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      </div>
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block mx-4 font-medium mb-2">
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className="shadow appearance-none border mx-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      <div className="flex p-2">

      <div className="mb-4">
        <label htmlFor="city" className="block mx-4 font-medium mb-2">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block mx-8 font-medium mb-2">
          State
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="shadow appearance-none mx-6 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      </div>
      <div className="flex p-2">

      <div className="mb-4">
        <label htmlFor="zipCode" className="block mx-4 font-medium mb-2">
        zipCode
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="mx-8 block font-medium mb-2">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="shadow appearance-none mx-6 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block mx-4 font-medium mb-2">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          required
        />
      </div>
      <div className="btn flex justify-center ">

        <button onClick={()=>setShowpayment(true)} type="submit "className='bg-yellow-500 flex justify-center mb-10 mt-2   hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded' >
          Proceed to Buy
        </button>
      </div>
      </form>
    </div>
      <div className='mt-10 w-1/2'>
      {showpayment && <PaymentForm
           formData={formData}
            curruser={curruser}
            cartItems={cart}
            subTotal={subTotal}
          />
      }
     </div>

    </div>
        
      </div>
    </div>
  )
}

export default Payment