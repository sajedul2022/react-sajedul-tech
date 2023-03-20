import React from "react";

export default function Contact() {
  return (
    <>
      <section class="contact-section">
        <div class="container">
          <div class="header-title text-center">
            <h2 class="title">Contact</h2>
          </div>
          {/* <!-- header-title --> */}
        </div>
      </section>

      {/* <!-- banner-section --> */}

      <section class="contact-section">
        <div class="map-section">
          <div id="googleMap"></div>

          <span class="form-view">
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back to
            form
          </span>
        </div>{" "}
        {/* <!-- map-section --> */}
        <div class="contact-section-one">
          <div class="container">
            <div class="section-one-wrapper">
              <div class="row">
                <h3>
                  Contact our support guys <br /> with our
                  consultants
                </h3>

                <div class="col-md-7 section-left">
                  <div class="contact-wrapper">
                    
                    <ul class="location">
                      <li>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>

                        <div class="content">
                          <span class="text">
                          Panthapath, Dhanmondi, Dhaka.
                          </span>

                          {/* <span class="map-view">
                            <i class="fa fa-street-view" aria-hidden="true"></i>{" "}
                            view on map
                          </span> */}

                        </div>
                      </li>

                      <li>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <span class="text">(+88) 01717468814</span>
                      </li>

                      <li>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <span class="text">info@creativesoftware.com.bd</span>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* <!-- contact-wrapper --> */}
                </div>

                <div class="col-md-5">
                  <div class="contact-wrapper">
                    <form class="contact-form">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="inputName"
                          placeholder="Name"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="contactSearchBar"
                          value="Email"
                          onblur="if(this.value=='')this.value='Email'"
                          onfocus="if(this.value=='Email')this.value=''"
                          id="contactSearchBar"
                          name="email"
                          type="email"
                        />
                      </div>

                      <div class="form-group">
                        <select class="form-control form-option">
                          <option disabled selected >Select One </option>
                          <option  >Software Development</option>
                          <option>Application Development</option>
                          <option>Query</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <textarea
                          class="form-control"
                          placeholder="Text"
                          rows="3"
                        ></textarea>
                      </div>

                      <div class="form-group">
                        <button
                          type="submit"
                          class="subscribeBtn btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <!-- contact-wrapper --> */}
                </div>
              </div>
            </div>
            {/* <!-- section-one-wrapper --> */}
          </div>
        </div>

       

        {/* <!-- contact-section-one --> */}

        <div class="contact-section-two">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-6">
                <div class="contact-wrapper-two">
                  <h3>Dhaka Office</h3>

                  <ul class="location">
                    <li>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span class="text">
                     Panthapath, Dhanmondi, Dhaka.
                      </span>
                    </li>

                    <li>
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span class="text">
                      (+88) 01717468814
                      </span>
                    </li>

                    <li>
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      <span class="text">info@creativesoftware.com.bd</span>
                    </li>
                  </ul>
                </div>{" "}
                {/* <!-- contact-wrapper-two --> */}
              </div>

              <div class="col-sm-6 col-md-6 ">
                <div class="contact-wrapper-two middle-wrapper">
                  <h3>Sylhet</h3>

                  <ul class="location">
                    <li>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span class="text">
                      Sylhet District, Sylhet Division<br /> 
                      </span>
                    </li>

                    <li>
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span class="text">
                      (+88) 01 717 468 814
                      </span>
                    </li>

                    <li>
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      <span class="text">info@creativesoftware.com.bd</span>
                    </li>
                  </ul>
                </div>{" "}
                {/* <!-- contact-wrapper-two --> */}
              </div>

              
            </div>
          </div>
        </div>
       
      </section>
      {/* <!-- contact-section --> */}
    </>
  );
}
