import React, { useRef } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div>
     <Navbar/>
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg mt-20 mb-20">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E84F88]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E84F88]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message:
          </label>
          <textarea
            id="message"
            ref={messageRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E84F88]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#E84F88] text-white py-2 px-4 rounded hover:focus:border-[#E84F88] focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default ContactUs;
