import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Paradise Stay</h1>
          <p className="lead">
            Discover luxurious rooms, world-class amenities, and a perfect retreat for your vacation.
          </p>
          <button className="btn btn-light btn-lg mt-3">Book Now</button>
        </div>
      </div>

      {/* Featured Rooms */}
      <div className="featured-rooms my-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Featured Rooms</h2>
          <div className="row">
            {/* Room 1 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="Luxury Room"
                />
                <div className="card-body">
                  <h5 className="card-title">Luxury Suite</h5>
                  <p className="card-text">
                    Experience ultimate luxury and comfort with our top-tier suite.
                  </p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="Deluxe Room"
                />
                <div className="card-body">
                  <h5 className="card-title">Deluxe Room</h5>
                  <p className="card-text">
                    Enjoy a serene stay with modern facilities at an affordable price.
                  </p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="Family Room"
                />
                <div className="card-body">
                  <h5 className="card-title">Family Room</h5>
                  <p className="card-text">
                    Perfect for family vacations, equipped with spacious and cozy interiors.
                  </p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section bg-light text-center py-5">
        <div className="container">
          <h3 className="fw-bold">Ready for an unforgettable stay?</h3>
          <p className="mb-4">Book your perfect room today and start your dream vacation.</p>
          <button className="btn btn-primary btn-lg">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
