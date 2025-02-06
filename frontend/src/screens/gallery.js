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
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-0.5s">
                <img src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Gallery Image 1" />
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-1s">
                <img src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Gallery Image 2" />
              </div>
            </div>
            {/* Image 3 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-1.5s">
                <img src="https://images.pexels.com/photos/2105327/pexels-photo-2105327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Gallery Image 3" />
              </div> 
            </div>
            {/* Image 4 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-2s">
                <img src="https://images.pexels.com/photos/9198187/pexels-photo-9198187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Gallery Image 4" />
              </div>
            </div>
            {/* Image 5 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-2.5s">
                <img src="https://images.pexels.com/photos/7594121/pexels-photo-7594121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Gallery Image 5" />
              </div>
            </div>
            {/* Image 6 */}
            <div className="col-md-4 col-sm-6">
              <div className="gallery-item animate__animated animate__zoomIn animate__delay-3s">
                <img src="https://images.pexels.com/photos/6939765/pexels-photo-6939765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Gallery Image 6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
