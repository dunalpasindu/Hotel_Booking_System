import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import HomePage from "./screens/homePage";

import OurStory from "./screens/ourstory";
import Gallery from "./screens/gallery";
import ContactUs from "./screens/contactUs";

import WeddingEvents from "./screens/weddingEvents";
import Rooms from "./screens/room";
import Dining from "./screens/dining";
import Offers from "./screens/offers";
import Suites from "./screens/suites";

import "./App.css";

function App() {
  return (

      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/contact" element={<ContactUs />} />

            <Route path="/wedding-events" element={<WeddingEvents />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/suites" element={<Suites />} />



          </Routes>

          <Footer />
        </div>
      </Router>
  );
}

export default App;
