import React from 'react';
import './Offers.css'; // Optional custom CSS

const Offers = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-info text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Offers</h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp">
            Discover amazing offers and special deals for your next stay.
          </p>
        </div>
      </div>

      {/* Special Offers */}
      <div className="offers-section my-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeInUp">
            Our Special Offers
          </h2>
          <div className="row">
            {/* Offer 1 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Offer" />
                <div className="card-body">
                  <h5 className="card-title">Stay 3 Nights, Get 1 Free</h5>
                  <p className="card-text">Book a 3-night stay and get the 4th night free! Limited time offer.</p>
                  <button className="btn btn-info">Claim Offer</button>
                </div>
              </div>
            </div>
            {/* Offer 2 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-1s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Offer" />
                <div className="card-body">
                  <h5 className="card-title">Romantic Getaway Package</h5>
                  <p className="card-text">A special package for couples with discounts on spa and dining services.</p>
                  <button className="btn btn-info">Claim Offer</button>
                </div>
              </div>
            </div>
            {/* Offer 3 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-2s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Offer" />
                <div className="card-body">
                  <h5 className="card-title">Business Traveler Discount</h5>
                  <p className="card-text">Get exclusive discounts on business stays and amenities.</p>
                  <button className="btn btn-info">Claim Offer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
