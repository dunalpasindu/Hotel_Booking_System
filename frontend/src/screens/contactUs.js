import React, { useState } from 'react';
import './contactUs.css'; // Optional custom CSS

const ContactUs = () => {
  const [phone, setPhone] = useState('');

  // Handle Phone number input change
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="contact-us-page bg-light py-5">
      {/* Contact Information Section */}
      <div className="contact-info-section text-center mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-3">
            We'd love to hear from you! Please reach out with any questions or inquiries.
          </p>
          <div className="row">
            <div className="col-md-4">
              <h3>Contact</h3>
              <p>1234 Hotel Street, City, Country</p>
              <p>Email: <a href="mailto:info@hotel-dev.com">info@hotel-dev.com</a></p>
              <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
            </div>
            <div className="col-md-8">
              {/* Google Map */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4656.331673879797!2d-115.81773359257218!3d37.23764526120056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b81baaba3e8c81%3A0x970427e38e6237ae!2sArea%2051%2C%20NV%2C%20USA!5e1!3m2!1sen!2slk!4v1739444679376!5m2!1sen!2slk"
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Send Us Your Questions</h2>
          <form>
            <div className="row">
              {/* Name Input */}
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="row">
              {/* Phone Input with Country Code Selector */}
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <div className="input-group">
                  <select className="form-select" id="countryCode" defaultValue="+1">
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    <option value="+61">+61</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />
                </div>
              </div>

              {/* Question Input */}
              <div className="col-md-6 mb-3">
                <label htmlFor="question" className="form-label">Your Question</label>
                <textarea
                  className="form-control"
                  id="question"
                  rows="4"
                  placeholder="Write your question here"
                  required
                ></textarea>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
