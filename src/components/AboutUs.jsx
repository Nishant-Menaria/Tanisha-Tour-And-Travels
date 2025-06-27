import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // fire when 30% visible
  });

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <strong>Tanisha Tour & Travels</strong> — your local partner in making travel safe, smooth, and memorable. Based offline and backed by years of hands-on experience, we specialize in providing top-notch taxi services, curated travel packages, and reliable self-drive rentals.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're planning a weekend escape, a family vacation, or just need a ride — we’re here with reliable vehicles, transparent pricing, and friendly service. Your comfort and trust are our top priorities.
        </p>

        {/* Animated Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-blue-700">
          <div>
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={1000} duration={2} /> : '0'}+
            </h3>
            <p className="mt-2 text-lg text-gray-700">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={10} duration={2} /> : '0'}+
            </h3>
            <p className="mt-2 text-lg text-gray-700">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={3000} duration={2.5} /> : '0'}+
            </h3>
            <p className="mt-2 text-lg text-gray-700">Rides Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
