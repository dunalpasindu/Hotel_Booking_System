import React from 'react'
import './footer.css'

function footer() {
  return (
    <div>
        <footer className="custom-footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Hotel - Dev is dedicated to providing the best service to make your stay comfortable and memorable. Learn more about us and what we offer.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/#">Home</a></li>
              <li><a href="#">Accommodation</a></li>
              <li><a href="/dining">Dining</a></li>
              <li><a href="/wedding-events">Wedding & Events</a></li>
              <li><a href="/offers">Offers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>1234 Hotel Street, City, Country</p>
            <p>Email: info@hotel-dev.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Dunal Pasindu. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default footer