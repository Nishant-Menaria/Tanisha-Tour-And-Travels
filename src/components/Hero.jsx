import React from 'react';
 
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[85vh] bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-center px-6 bg-center bg-cover"
      style={{ backgroundImage: "url('/Images/hero-bg.jpeg')" }}
    >
      <div className="max-w-2xl mb-auto">
        <img src='/Images/swaeiayji.jpeg' className='max-h-50 mx-auto'/>
        <h1 className=" text-4xl md:text-5xl font-extrabold text-white mb-2 mt-3 leading-tight">
          Welcome to Tanisha Tour & Travels
        </h1>
        <p className="text-white text-lg md:text-xl mb-17">
          Your trusted partner for <strong>Taxi Services</strong>, <strong>Tour Packages</strong>, and <strong>Self-Drive Car Rentals</strong>.
        </p>
        <a
          href="#contact"
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
