import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Taxi / Cab Services",
    image: "/Images/taxi.png",
    description: "Safe, reliable, and comfortable taxi services for city and outstation travel.",
    href: "/taxi",
  },
  {
    title: "Tour & Travel Packages",
    image: "/Images/tour.jpg",
    description: "Custom and group tour packages to popular destinations at affordable prices.",
    href: "/tour",
  },
  {
    title: "Self-Drive Bike & Car Rental",
    image: "/Images/self-rental.png",
    description: "Well-maintained vehicals for rent with flexible plans and minimal paperwork.",
    href: "/rental",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-10">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 transform cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-40 h-30 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
