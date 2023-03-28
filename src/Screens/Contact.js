import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";


const ContactUs = () => {
  
  const [loading, setLoading] = useState(false);
  const handleSubmit=()=>{
      setLoading(true);
  }
  return (
    <div className="flex flex-col  h-[100%] bg-gray-100">
      <h2 className="text-3xl font-bold my-2 mb-8 text-center">Contact Us</h2>
      <div className="flex ml-20">
      <div className="div  ">
        <iframe
          title="GoogleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7571.694513952909!2d76.54919062461806!3d18.399801549917655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83e6d2318a0f%3A0x14479ce5910f0f76!2sPrakash%20Nagar%2C%20Latur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679660358922!5m2!1sen!2sin"
          width={650}
          height={550}
          style={{"marginTop":"1.5rem","marginBottom":"1.5rem","marginRight":"18px"}}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-xl w-[50%]  my-6 items-center justify-center bg-white rounded-lg shadow-lg p-8">
        <div className="flex-col justify-center ">
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="https://formspree.io/f/mdovlpwl"
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-600 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col mt-8">
            <h3 className="text-xl font-medium mb-4">Get in touch</h3>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-gray-500 mr-2"
              />
              <p className="text-gray-600">123 Prakash Nagar, Latur India</p>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-500 mr-2"
              />
              <p className="text-gray-600">contact@pizzaPlanet.com</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>
        </div>
        {loading && <div>Thanks For Sending the Message we Will connect respond you as soon as possible</div>}
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
