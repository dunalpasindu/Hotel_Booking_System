import React from 'react';
import './ourstory.css'; // Import custom styles for additional motion effects

const OurStory = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="our-story-hero-section bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            Our Story
          </h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp">
            Discover the journey behind Paradise Stay and the passion that drives us.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-1">
              <img
                src="https://images.pexels.com/photos/14203302/pexels-photo-14203302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our Story"
                className="img-fluid rounded shadow-lg animate__animated animate__zoomIn"
              />
            </div>
            <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center">
              <h2 className="fw-bold animate__animated animate__slideInRight">
                A Dream Turned Into Reality
              </h2>
              <p className="mt-3 text-muted animate__animated animate__slideInRight animate__delay-1s">
                Paradise Stay began with a simple dream: to create a sanctuary where people
                can escape the chaos of life and indulge in tranquility. Our story is about
                building a home away from home, enriched with luxury, comfort, and warmth.
              </p>
              <p className="text-muted animate__animated animate__slideInRight animate__delay-2s">
                Over the years, we’ve welcomed countless guests, creating memories that last
                a lifetime. From humble beginnings to becoming a renowned destination, our
                journey continues with your support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section bg-light text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 animate__animated animate__fadeInUp">
            Our Mission
          </h2>
          <p className="lead text-muted animate__animated animate__fadeInUp animate__delay-1s">
            To provide exceptional hospitality that combines comfort, luxury, and impeccable
            service, leaving our guests with unforgettable memories.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section bg-primary text-white text-center py-5">
        <div className="container">
          <h3 className="fw-bold animate__animated animate__bounceIn">
            Join Us in Our Journey
          </h3>
          <p className="mb-4 animate__animated animate__fadeInUp">
            Be a part of our story. Book your stay today and experience the magic.
          </p>
          <button className="btn btn-light btn-lg animate__animated animate__pulse animate__infinite">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
