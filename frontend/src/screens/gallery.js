import React from 'react';
import './gallery.css'; // Optional custom CSS

const Gallery = () => {
  return (
    <div className="gallery-page bg-dark text-white py-5">
      {/* Hero Section */}
      <div className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold animate__animated animate__fadeIn">Our Gallery</h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp">
            Explore our stunning collection of images showcasing our luxurious rooms, suites, and more.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="gallery-container my-5">
        <div className="container">
          <div className="row">
            {/* Image 1 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-1s">
                <img src="https://via.placeholder.com/500x300" className="img-fluid" alt="Gallery Image 1" />
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-2s">
                <img src="https://via.placeholder.com/500x300" className="img-fluid" alt="Gallery Image 2" />
              </div>
            </div>
            {/* Image 3 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-3s">
                <img src="https://via.placeholder.com/500x300" className="img-fluid" alt="Gallery Image 3" />
              </div>
            </div>
            {/* Image 4 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-4s">
                <img src="https://via.placeholder.com/500x300" className="img-fluid" alt="Gallery Image 4" />
              </div>
            </div>
            {/* Image 5 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-5s">
                <img src="https://via.placeholder.com/500x300" className="img-fluid" alt="Gallery Image 5" />
              </div>
            </div>
            {/* Image 6 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-6s">
                <img src="https://via.placeholder.com/500x300" className="img-fluid" alt="Gallery Image 6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
