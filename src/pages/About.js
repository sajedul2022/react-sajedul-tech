import React from "react";
import Testimonial from "../Components/Testimonial";

export default function About() {
  return (
    <>
      <section class="banner-section">
        <div class="container">
          <div class="header-title text-center">
            <h2 class="title">About us</h2>
          </div>
        </div>
      </section>
      <section class="working-section section-padding">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Company Overview</h2>
            <span class="title-border"></span>
          </div>
          {/* <!-- title-bar --> */}
          <div class="section-wrapper">
            <div class="row">
              <div class="col-md-12">
                <div class="wrapper-content">
                  <div class="content-about">
                    <h3>
                      We focus on offering high quality services to create real
                      value for our customers, assuring they can maximise the
                      profits obtained from the machines they bought. Creative
                      Software is a professional software, website development
                      company based in India that endeavor on highly proficient,
                      timely delivered and cost effective software, website and
                      Apps development services. We are highly experienced in
                      offering offshore software,Website & Apps development.
                      <br/>A company whose primary products are various forms
                      of software, software technology, distribution, and
                      software product development. They make up the software
                      industry.
                    </h3>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      
                      <p class="content-about">
                        <div class="title-bar text-center">
                          <h2 class="title">Our Mission</h2>
                          <span class="title-border"></span>
                        </div>
                        Our mission is to enhance business growth of our
                        customers with creative design, development and to
                        deliver market defining high quality solutions that
                        create value and reliable competitive advantage to
                        customers around the globe.
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p class="content-about">
                        <div class="title-bar text-center">
                          <h2 class="title">Our Vision</h2>
                          <span class="title-border"></span>
                        </div>
                        Our Vision at Creative Software is to be the most
                        innovative software company in any market. we choose to
                        operate in, no matter what country or industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- wrapper-content --> */}
              </div>
            </div>
          </div>
          {/* <!-- section-wrapper --> */}
        </div>
      </section>
      {/* <!-- working-section --> */}
      <Testimonial />
    </>
  );
}
