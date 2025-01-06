import React from 'react';
// import './Suites.css'; // Optional custom CSS

const Suites = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-warning text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Suites</h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp">
            Discover our luxurious suites designed to give you an exceptional stay.
          </p>
        </div>
      </div>

      {/* Suites List */}
      <div className="suites-section my-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeInUp">
            Our Suites
          </h2>
          <div className="row">
            {/* Suite 1 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Suite" />
                <div className="card-body">
                  <h5 className="card-title">Presidential Suite</h5>
                  <p className="card-text">An exclusive suite offering panoramic views and top-tier amenities.</p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>
            {/* Suite 2 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-1s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Suite" />
                <div className="card-body">
                  <h5 className="card-title">Executive Suite</h5>
                  <p className="card-text">Ideal for business travelers, combining work and leisure seamlessly.</p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>
            {/* Suite 3 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-2s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Suite" />
                <div className="card-body">
                  <h5 className="card-title">Honeymoon Suite</h5>
                  <p className="card-text">Romantic suites with private balconies and breathtaking views.</p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suites;
