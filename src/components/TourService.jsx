import React, { useState } from 'react';
import { MapPin, Plane, Camera } from 'lucide-react';

const TourBooking = () => {
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappLink = `https://wa.me/9414161002?text=Hi, I am interested in a custom tour.%0ADestination: ${encodeURIComponent(formData.destination)}%0ADuration: ${encodeURIComponent(formData.duration)}%0ABudget: ${encodeURIComponent(formData.budget)}`;

  return (
    <section className="bg-[#f6f9fc] py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Custom <span className="text-blue-600">Trip Planning</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          No fixed packages – just personalized journeys crafted around your dreams, duration, and budget
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          How We Plan Your Perfect Trip
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-center mb-4">
              <MapPin className="text-blue-600 w-10 h-10" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Tell Us Your Dream</h4>
            <p className="text-gray-600 text-sm mb-4">
              Share your preferred destination, travel dates, and group size
            </p>
            <ul className="text-left text-gray-600 space-y-1 pl-4 text-sm">
              <li>• Destination preferences</li>
              <li>• Travel duration</li>
              <li>• Group size & type</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-center mb-4">
              <Plane className="text-blue-600 w-10 h-10" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Set Your Budget</h4>
            <p className="text-gray-600 text-sm mb-4">
              Let us know your budget range and we’ll craft the perfect experience
            </p>
            <ul className="text-left text-gray-600 space-y-1 pl-4 text-sm">
              <li>• Budget planning</li>
              <li>• Value optimization</li>
              <li>• Transparent pricing</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-center mb-4">
              <Camera className="text-blue-600 w-10 h-10" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Custom Itinerary</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get a personalized day-by-day itinerary designed just for you
            </p>
            <ul className="text-left text-gray-600 space-y-1 pl-4 text-sm">
              <li>• Personalized planning</li>
              <li>• Local experiences</li>
              <li>• Flexible scheduling</li>
            </ul>
          </div>
        </div>

        {/* Enhanced Form Section */}
        <div className="bg-white p-10 rounded-xl shadow-xl max-w-2xl mx-auto">
          <h4 className="text-3xl font-bold text-gray-800 mb-6">Plan Your Trip Now</h4>
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="destination"
              placeholder="Preferred Destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="duration"
              placeholder="Travel Duration (e.g. 5 days)"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full md:col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-8 bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition w-full"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TourBooking;
