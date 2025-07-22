import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-200 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Have a question or ready to book your ride? Reach out to us anytime!
        </p>

        <div className="grid gap-8 md:grid-cols-2 text-left">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📞 Phone / WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              <a href="tel:+919414161002" className="text-red-600 hover:underline">
                +91 9414161002
              </a>
              <br />
              <a href="https://wa.me/919414161002" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">
                Chat on WhatsApp
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">📧 Email</h3>
            <p className="text-gray-600 mb-4">
              <a href="mailto:your@email.com" className="hover:underline">
                tanishatoursandtravels2226@gmail.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">📍 Address</h3>
            <p className="text-gray-600">
              Paneriyo Ki Madri , Near Water Tank , Udaipur </p>
          </div>

          {/* Optional future form placeholder */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Message</h3>
            <p className="text-sm text-gray-500 mb-4">
              (Form integration coming soon)
            </p>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg opacity-50 cursor-not-allowed">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
