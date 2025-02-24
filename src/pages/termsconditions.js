import React from 'react';

const TermsConditions = () => {
  
    return (
      <>
          <div className="tekup-breadcrumb" style={{ backgroundImage: 'url(/assets/images/hero/terms-and-condition.jpg)' }}>
            <div className="container">
              <h1 className="post__title">Terms & Conditions</h1>
              <nav className="breadcrumbs">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li aria-current="page">Terms & Conditions</li>
                </ul>
              </nav>
            </div>
          </div>
          {/* End breadcrumb */}
  
          <div className="section tekup-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="tekup-service-details-wrap" data-aos="fade-up" data-aos-duration="600">
                    <div className="tekup-service-details-item">
                      <h3>Terms & Conditions</h3>
                      <p>
                        Welcome to Digital Araa! These terms and conditions outline the rules and regulations for the use 
                        of our website and services. By accessing or using our site, you agree to comply with these terms.
                      </p>
                      <p>
                        We reserve the right to make changes to these terms at any time. It is your responsibility to check 
                        this page periodically for updates. Your continued use of our services after any modifications to the 
                        terms constitutes acceptance of those changes.
                      </p>
                      <p>
                        The content of our site is for your general information and use only. It is subject to change without 
                        notice. Unauthorized use of our website may give rise to a claim for damages and/or be a criminal offense.
                      </p>
                      <p>
                        For more information about our services or to contact us, please reach out through the contact 
                        information provided on our website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End section */}
  
          <div className="section bg-cover" style={{ backgroundImage: 'url(/assets/images/v1/cta-bg.png)' }}>
            <div className="container">
              <div className="tekup-cta-wrap">
                <div className="tekup-cta-content center">
                  <h2>Let’s work together</h2>
                  <p>
                    We are architects of innovation, trailblazers of advancement, and partners in your success. 
                    As a dynamic and forward-thinking company, we offer cutting-edge digital solutions to elevate your business.
                  </p>
                  <div className="tekup-extra-mt" data-aos="fade-up" data-aos-duration="600">
                    <a className="tekup-default-btn tekup-white-btn" href="/contact">Start a Project <i className="ri-arrow-right-up-line"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End section */}
      </>
    );
  };
  
  export default TermsConditions;