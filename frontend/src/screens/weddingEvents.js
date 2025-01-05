import React from 'react';
import './WeddingEvents.css'; // Optional custom CSS

const WeddingEvents = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-danger text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Wedding & Events</h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp">
            Celebrate your special moments with us, from weddings to corporate events.
          </p>
        </div>
      </div>

      {/* Events Details */}
      <div className="events-section my-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeInUp">
            Our Event Spaces
          </h2>
          <div className="row">
            {/* Event 1 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Event" />
                <div className="card-body">
                  <h5 className="card-title">Grand Ballroom</h5>
                  <p className="card-text">Perfect for large weddings, banquets, and corporate events.</p>
                  <button className="btn btn-danger">Book Event</button>
                </div>
              </div>
            </div>
            {/* Event 2 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-1s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Event" />
                <div className="card-body">
                  <h5 className="card-title">Intimate Garden</h5>
                  <p className="card-text">An elegant outdoor setting for small gatherings and weddings.</p>
                  <button className="btn btn-danger">Book Event</button>
                </div>
              </div>
            </div>
            {/* Event 3 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-2s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Event" />
                <div className="card-body">
                  <h5 className="card-title">Conference Room</h5>
                  <p className="card-text">For corporate events, conferences, and meetings.</p>
                  <button className="btn btn-danger">Book Event</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingEvents;
