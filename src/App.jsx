import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/AboutUs';
import Contact from './components/Contact';

// Dedicated service pages
import TaxiService from './components/TaxiService';
import TourService from './components/TourService'; // You’ll create this
import RentalService from './components/RentalService'; // You’ll create this
import ScrollToHashElement from './components/ScroolToHashElement';

const App = () => {
  return (
    <div>
      <ScrollToHashElement />
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/taxi" element={<TaxiService />} />
          <Route path="/tour" element={<TourService />} />
          <Route path="/rental" element={<RentalService />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
