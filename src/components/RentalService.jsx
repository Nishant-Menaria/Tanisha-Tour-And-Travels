import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cars = [
  {
    name: 'Mahindra Scorpio',
    image: '/Images/Scorpio.png',
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 7,
    rate: '₹5000 / 24 hrs',
  },
  {
    name: 'Mahindra Thar',
    image: '/Images/Thar.png',
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 4,
    rate: '₹5000 / 24 hrs',
  },
  {
    name: 'Whillys',
    image: '/Images/whillys.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    rate: '₹2000 / 24 hrs',
  },
  {
    name: 'Maruti Dzire',
    image: '/Images/dzire.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    rate: '₹3000 / 24 hrs',
  },
  {
    name: 'Maruti Brezza',
    image: '/Images/brezza.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    rate: '₹2800 / 24 hrs',
  },
  {
    name: 'Maruti XL6',
    image: '/Images/xl6-removebg.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 6,
    rate: '₹2900 / 24 hrs',
  },
  {
    name: 'Hyundai Creta',
    image: '/Images/creta.png',
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 5,
    rate: '₹2850 / 24 hrs',
  },
  {
    name: 'Kia Sonet',
    image: '/Images/sonet.png',
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 5,
    rate: '₹3000 / 24 hrs',
  },
  {
    name: 'Maruti Ertiga',
    image: '/Images/ertiga.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 7,
    rate: '₹3500 / 24 hrs',
  },
  {
    name: 'Hyundai i20',
    image: '/Images/i20.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    rate: '₹2600 / 24 hrs',
  },
  {
    name: 'Hyundai i10 Neos',
    image: '/Images/i10-neos.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    rate: '₹2400 / 24 hrs',
  },
  {
    name: 'Hyundai Eon',
    image: '/Images/eon.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    rate: '₹2000 / 24 hrs',
  },
];

const bikes = [
  {
    name: 'Honda Activa',
    image: '/Images/activa.webp',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹400 / 24 hrs',
    advance: '₹1500'
  },
  {
    name: 'Hero Honda Splendor',
    image: '/Images/splendor.webp',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹500 / 24 hrs',
    advance: '₹2000'
  },
  {
    name: 'Honda Activa 125',
    image: '/Images/activa125.webp',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹400 / 24 hrs',
    advance: '₹1500'
  },
  {
    name: 'Yamaha FZ',
    image: '/Images/fz.webp',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹700 / 24 hrs',
    advance: '₹2000'
  },
  {
    name: 'Royal Enfield Hunter 300',
    image: '/Images/hunter.webp',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹1000 / 24 hrs',
    advance: '₹3000'
  },
  {
    name: 'Royal Enfield Classic 350',
    image: '/Images/classic350.webp',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹1200 / 24 hrs',
    advance: '₹3000'
  },
  {
    name: 'Yamaha Ray ZR 125',
    image: '/Images/rayZR125.webp',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹400 / 24 hrs',
    advance: '₹1500'
  },
  {
    name: 'Suzuki Access 125',
    image: '/Images/access125.webp',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 2,
    rate: '₹400 / 24 hrs',
    advance: '₹1500'
  }
];

const RentalService = () => {
  const [activeTab, setActiveTab] = useState('car');
  const [hasInteracted, setHasInteracted] = useState(false);
  const sectionRef = useRef(null);

  const vehiclesToRender = activeTab === 'car' ? cars : bikes;

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setHasInteracted(true);
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 scroll-mt-20 bg-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Self-Drive Rental Vehicles</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Choose from a wide range of well-maintained vehicles for self-drive rentals. Enjoy flexible rental plans, minimal documentation, and complete freedom on the road.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Terms & Conditions:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Driving Licence is compulsory</li>
            <li>Aadhar Card is compulsory</li>
            <li>Security Deposit is compulsory</li>
            <li>The vehicle is available for <strong>8 hours only</strong></li>
          </ul>
        </div>

        <div className="">
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => handleTabClick('car')}
              className={`flex-1 py-3 rounded font-medium transition duration-300 ${
                activeTab === 'car'
                  ? 'bg-white shadow-lg text-gray-900'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              4-Wheelers
            </button>
            <button
              onClick={() => handleTabClick('bike')}
              className={`flex-1 py-3 rounded font-medium transition duration-300 ${
                activeTab === 'bike'
                  ? 'bg-white shadow-lg text-gray-900'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              2-Wheelers
            </button>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={hasInteracted ? { rotateY: activeTab === 'car' ? 90 : -90, opacity: 0 } : false}
                animate={hasInteracted ? { rotateY: 0, opacity: 1 } : false}
                exit={hasInteracted ? { rotateY: activeTab === 'car' ? -90 : 90, opacity: 0 } : false}
                transition={hasInteracted ? { duration: 1.4, ease: 'easeInOut' } : {}}
                className="absolute inset-0 w-full will-change-transform"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {vehiclesToRender.map((vehicle, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition"
                    >
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-50 object-cover rounded mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{vehicle.name}</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-600 text-sm text-left mb-3">
                        <p>🚘 Transmission: {vehicle.transmission}</p>
                        <p>⛽ Fuel Type: {vehicle.fuel}</p>
                        <p>🧍‍♂️ Seats: {vehicle.seats} Seater</p>
                        <p>💰 Rate: <strong>{vehicle.rate}</strong></p>
                        {vehicle.advance && <p>🪙 Advance: {vehicle.advance}</p>}
                      </div>
                      <div className="flex justify-center mt-4">
                        <a
                          href={`https://wa.me/9414161002?text=Hi, I'm interested in booking the ${encodeURIComponent(
                            vehicle.name
                          )} self-drive rental ${activeTab === 'car' ? 'car' : 'two-wheeler'}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalService;
