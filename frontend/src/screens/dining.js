import React from 'react';
import './Dining.css'; // Optional custom CSS

const Dining = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-success text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Dining</h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp">
            Indulge in a fine dining experience with our exquisite cuisine.
          </p>
        </div>
      </div>

      {/* Dining Options */}
      <div className="dining-section my-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeInUp">
            Our Dining Options
          </h2>
          <div className="row">
            {/* Dining Option 1 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Dining" />
                <div className="card-body">
                  <h5 className="card-title">Gourmet Restaurant</h5>
                  <p className="card-text">Experience world-class gourmet cuisine in an elegant setting.</p>
                  <button className="btn btn-success">View Menu</button>
                </div>
              </div>
            </div>
            {/* Dining Option 2 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-1s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Dining" />
                <div className="card-body">
                  <h5 className="card-title">Cafe Lounge</h5>
                  <p className="card-text">Relax and enjoy light bites and coffee in a cozy atmosphere.</p>
                  <button className="btn btn-success">View Menu</button>
                </div>
              </div>
            </div>
            {/* Dining Option 3 */}
            <div className="col-md-4">
              <div className="card animate__animated animate__zoomIn animate__delay-2s">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Dining" />
                <div className="card-body">
                  <h5 className="card-title">Poolside Bar</h5>
                  <p className="card-text">Sip on refreshing cocktails while enjoying the poolside views.</p>
                  <button className="btn btn-success">View Menu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
