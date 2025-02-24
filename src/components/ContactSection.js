import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 600 });
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_i364uht';
    const templateIDToAdmin = 'template_m8x0yf7';
    const userID = 'iz1N0uoVjI_Z8UCdb';

    // Email to Admin only
    emailjs.send(serviceID, templateIDToAdmin, formData, userID)
      .then((response) => {
        console.log('Admin Email Sent!', response.status, response.text);
        setSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });

        // Scroll to the success message
        const successDiv = document.getElementById('success-message');
        successDiv && successDiv.scrollIntoView({ behavior: 'smooth' });

        // Set timeout to hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Failed to send admin email...', err);
        setError(true);

        // Set timeout to hide error message after 5 seconds
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>Let’s Build an Awesome Project Together</h2>
              <p>
                At our IT solutions company, we prioritize outstanding customer service. If you have technical difficulties or need assistance, we're here to help!
              </p>
              <div className="tekup-contact-info-wrap wrap2">
                <div className="tekup-contact-info mb-0">
                  <i className="ri-map-pin-2-fill" />
                  <h5>Address</h5>
                  <p>
                    No 213, NGGO Colony,
                    <br />
                    Coimbatore,
                    <br />
                    Tamilnadu, India.
                  </p>
                </div>
                <div className="tekup-contact-info mb-0">
                  <i className="ri-mail-fill" />
                  <h5>Contact</h5>
                  <a href="mailto:digitalaraa@gmail.com">digitalaraa@gmail.com</a>
                  <a href="tel:+919843442155">9843442155</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="tekup-main-form">
              <h3>Fill The Contact Form</h3>
              <p>We encourage you to contact us; your inquiries are important to us.</p>
              {success && (
                <div
                  id="success-message"
                  className="success-message"
                  data-aos="fade-in"
                >
                  Your message has been sent successfully! We'll be in touch soon.
                </div>
              )}
              {error && (
                <div
                  id="error-message"
                  className="error-message"
                  data-aos="fade-in"
                >
                  There was an error sending your message. Please try again.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <textarea
                        name="message"
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button id="tekup-main-form-btn" type="submit">
                      Send Message <i className="ri-arrow-right-up-line" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;