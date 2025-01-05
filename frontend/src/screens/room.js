import React from 'react';
import './Rooms.css'; // Optional custom CSS

const Rooms = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Rooms</h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp">
            Explore our variety of rooms designed for comfort, luxury, and style.
          </p>
        </div>
      </div>

      {/* Rooms List */}
      <div className="rooms-section my-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeInUp">
            Our Rooms
          </h2>
          <div className="row">
            {/* Room 1 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Room" />
                <div className="card-body">
                  <h5 className="card-title">Standard Room</h5>
                  <p className="card-text">Comfortable and affordable with all essential amenities.</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            {/* Room 2 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-1s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Room" />
                <div className="card-body">
                  <h5 className="card-title">Deluxe Room</h5>
                  <p className="card-text">Spacious rooms with luxury touches for an unforgettable experience.</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            {/* Room 3 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-2s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Room" />
                <div className="card-body">
                  <h5 className="card-title">Family Room</h5>
                  <p className="card-text">Perfect for family stays, with enough space for everyone to relax.</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
