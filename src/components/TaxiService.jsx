import React, { useState } from 'react';

const cars = [
  {
    name: 'Innova Crysta',
    rate: '₹18/km',
    thumbnail: '/Images/innova-crysta.png',
    images: ['/images/innova-crysta-1.jpg', '/images/innova-crysta-2.jpg'],
    seats: 6,
    ac: true,
    luggage: '4 bags',
    description: 'Premium comfort for long-distance travel from Udaipur to nearby hill stations.',
  },
  {
    name: 'Innova',
    rate: '₹16/km',
    thumbnail: '/Images/innova.png',
    images: ['/images/innova-1.jpg'],
    seats: 6,
    ac: true,
    luggage: '4 bags',
    description: 'Ideal for family and group trips to Kumbhalgarh, Ranakpur & Mount Abu.',
  },
  {
    name: 'Innova Hycross',
    rate: '₹19/km',
    thumbnail: '/Images/innova-hycross.jpg',
    images: ['/images/innova-hycross-1.jpg'],
    seats: 6,
    ac: true,
    luggage: '4 bags',
    description: 'Hybrid MPV with top-tier comfort and mileage — great for long tours.',
  },
  {
    name: 'Swift Dzire',
    rate: '₹11/km',
    thumbnail: '/Images/dzire.png',
    images: ['/images/dzire-1.jpg'],
    seats: 4,
    ac: true,
    luggage: '2 bags',
    description: 'Economical sedan perfect for local city use or airport drops.',
  },
  {
    name: 'Amaze',
    rate: '₹11/km',
    thumbnail: '/Images/amaze.jpg',
    images: ['/images/amaze-1.jpg'],
    seats: 4,
    ac: true,
    luggage: '2 bags',
    description: 'Compact sedan for clean, comfortable city travel in Udaipur.',
  },
  {
    name: 'Ertiga',
    rate: '₹14/km',
    thumbnail: '/Images/ertiga.png',
    images: ['/images/ertiga-1.jpg'],
    seats: 7,
    ac: true,
    luggage: '3 bags',
    description: 'Affordable 7-seater, great for sightseeing or family outings.',
  },
  {
    name: 'XL6',
    rate: '₹15/km',
    thumbnail: '/Images/xl6.jpg',
    images: ['/images/xl6-1.jpg'],
    seats: 6,
    ac: true,
    luggage: '3 bags',
    description: 'Luxury 6-seater with captain seats — comfort for Udaipur trips.',
  },
  {
    name: 'Traveller',
    rate: '₹26/km',
    thumbnail: '/Images/traveller.webp',
    images: ['/images/traveller-1.jpg'],
    seats: 12,
    ac: true,
    luggage: '6 bags',
    description: 'Spacious van for big families, weddings, or group tours.',
  },
  {
    name: 'Urbania',
    rate: '₹32/km',
    thumbnail: '/Images/urbania.png',
    images: ['/images/urbania-1.jpg'],
    seats: 14,
    ac: true,
    luggage: '8 bags',
    description: 'Premium tourist van — great for group tours and long road trips.',
  },
  {
    name: 'Etios',
    rate: '₹11/km',
    thumbnail: '/Images/etios.jpg',
    images: ['/images/etios-1.jpg'],
    seats: 4,
    ac: true,
    luggage: '2 bags',
    description: 'Economical and reliable — fits your budget for city travel.',
  },
];

const TaxiService = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const closeGallery = () => {
    setSelectedCar(null);
    setActiveIndex(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev + 1 < selectedCar.images.length ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : selectedCar.images.length - 1
    );
  };

  return (
    <section id="taxi-service" className="scroll-mt-20">
      {/* Taxi & Cab Service Intro */}
      <div className="py-5 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/Images/taxi-service-hero.jpg"
              alt="Taxi Service"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Taxi & Cab Services in Udaipur
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Explore Udaipur with our clean, reliable, and comfortable taxi fleet. Whether it’s airport pickup, local sightseeing, or outstation trips to Mount Abu, Chittorgarh, or Kumbhalgarh — we’ve got you covered!
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>AC & Non-AC cabs available</li>
              <li>One-way & round-trip options</li>
              <li>Experienced, verified drivers</li>
              <li>24×7 Booking available via phone or WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Udaipur Info Section */}
      <div className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Visit Udaipur?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Udaipur, often known as the <strong>“City of Lakes”</strong>, is the beautiful city in the Indian state of Rajasthan. 
            Known for its palatial architecture, shimmering lakes, and rich cultural heritage, Udaipur has earned its reputation 
            as one of the most romantic and beautiful cities in India.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            One of the city’s most popular features is its lakes. Among them, <strong>Lake Pichola</strong> stands out as a central 
            attraction, with the majestic <strong>Lake Palace</strong> (now a luxury hotel) seemingly floating on its peaceful waters. 
            Other notable lakes include <strong>Fateh Sagar</strong>, <strong>Udai Sagar</strong>, and <strong>Jaisamand</strong>.
          </p>
        </div>
      </div>

      {/* Fleet Section */}
      <div className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Cab Fleet</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <img
                  src={car.thumbnail}
                  alt={car.name}
                  className="w-80 mx-auto h-40 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{car.description}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600 text-sm mt-3 text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600">🚘</span> <strong>Seats:</strong> {car.seats}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600">❄️</span> <strong>AC:</strong> {car.ac ? 'Yes' : 'No'}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600">🧳</span> <strong>Luggage:</strong> {car.luggage}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600">💰</span> <strong>Rate:</strong> {car.rate}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                <a
                    href={`https://wa.me/9414161002?text=Hi, I'm interested in booking the ${car.name} taxi.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Book Now
                  </a>

                  
                </div>
              </div>
            ))}
          </div>

          
          
        </div>
      </div>
    </section>
  );
};

export default TaxiService;
