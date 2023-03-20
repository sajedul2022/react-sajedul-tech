import React from "react";
import { Link } from "react-router-dom";
import Testimonial from "../Components/Testimonial";

export default function Home() {
  return (
    <>
      <section class="hero">
        <div class="container">
          <div class="header-title text-center">
            <h2 class="title">Welcome to Creative Software</h2>
            <span class="sub-title">
              Best Software Development Company in Dhaka, Bangladesh
            </span>
          </div>
        </div>
      </section>

      {/* slider */}
      {/* <section className="slider-section">
        <div className="tp-banner-container">
          <div className="tp-banner">
            <ul>
              <li
                data-transition="fade"
                data-slotamount="7"
                data-masterspeed="1000"
                data-thumb="assets/images/slider/slider-3.jpg"
                data-delay="13000"
                data-title="We are Consult Care"
              >
                <img
                  src="assets/images/slider/slider-3.jpg"
                  alt="newslide2014_1"
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />

                <div
                  className="tp-caption large-text text-center customin customout"
                  data-x="center"
                  data-y="260"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="1800"
                  data-start="500"
                  data-easing="Power3.easeInOut"
                  data-splitin="chars"
                  data-splitout="chars"
                  data-elementdelay="0.08"
                  data-endelementdelay="0.08"
                  data-end="8000"
                  data-endspeed="500"
                  style={{ zIndex: 2 }}
                >
                  <h1>
                    Welcome to Creative Software <br /> Best Software
                    Development Company in Dhaka, Bangladesh
                  </h1>
                </div>

                <div
                  classNameName="tp-caption small-text text-center customin customout rs-parallaxlevel-0"
                  data-x="center"
                  data-y="550"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="2000"
                  data-start="3300"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-end="11000"
                  data-endspeed="2000"
                  data-linktoslide="next"
                  style={{ zIndex: 8 }}
                >
                  We have been trusted advisors to the world's foremost
                  organizations. Consult Care is a self-owned <br /> firm,
                  committed to helping clients.
                </div>

                <div
                  className="tp-caption lfb ltt"
                  data-x="center"
                  data-y="675"
                  data-speed="1800"
                  data-start="4500"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.1"
                  data-end="12000"
                  data-endspeed="1800"
                  data-endeasing="Power4.easeIn"
                  style={{ zIndex: 3 }}
                >
                  <div className="link-button hidden-xs">
                    <a href="#" className="btn btn-primary">
                      About us
                    </a>
                    <a href="#" className="btn btn-default">
                      Contact
                    </a>
                  </div>
                </div>
              </li>

              <li
                data-transition="fade"
                data-slotamount="7"
                data-masterspeed="1000"
                data-thumb="assets/images/slider/slider-3.jpg"
                data-delay="13000"
                data-title="We are Consult Care"
              >
                <img
                  src="assets/images/slider/slider-3.jpg"
                  alt="newslide2014_1"
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />

                <div
                  class="tp-caption large-text customin customout"
                  data-x="430"
                  data-y="260"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="1800"
                  data-start="500"
                  data-easing="Power3.easeInOut"
                  data-splitin="chars"
                  data-splitout="chars"
                  data-elementdelay="0.08"
                  data-endelementdelay="0.08"
                  data-end="8000"
                  data-endspeed="500"
                  style={{ zIndex: 2 }}
                >
                  {" "}
                  <h1>
                    Improve your business <br /> & grow up
                  </h1>
                </div>

                <div
                  class="tp-caption small-text customin customout rs-parallaxlevel-0"
                  data-x="430"
                  data-y="550"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="2000"
                  data-start="3300"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-end="11000"
                  data-endspeed="2000"
                  data-linktoslide="next"
                  style={{ zIndex: 8 }}
                >
                  {" "}
                  ConsultCare is an international consultancy that provides
                  connected thinking, <br /> insight and capability to industry
                  leading organisations.
                </div>

                <div
                  class="tp-caption lfb ltt"
                  data-x="430"
                  data-y="675"
                  data-speed="1800"
                  data-start="4500"
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.1"
                  data-end="12000"
                  data-endspeed="1800"
                  data-endeasing="Power4.easeIn"
                  style={{ zIndex: 3 }}
                >
                  <div class="link-button hidden-xs">
                    <a href="#" class="btn btn-primary">
                      Learn More
                    </a>
                    <a href="#" class="btn btn-default">
                      Contact
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* about */}

      <section class="working-section section-padding">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Design, Build, Grow.</h2>

            <span class="title-border"></span>
          </div>{" "}
          {/* <!-- title-bar --> */}
          <div class="section-wrapper">
            <div class="row">
              <div class="col-md-4">
                <div class="wrapper-content">
                  <h4>
                    {" "}
                    Best Software Development Company in Dhaka, Bangladesh
                  </h4>
                  <p>
                    Our work is always intended to provide a clear benefit to
                    the organizations we work with in both the short and long
                    term. We focus our global scale, and drive excellence in all
                    we do while enhancing our partner-like culture to ensure{" "}
                  </p>

                  <Link to="/about" class="btn btn-primary">
                    More about us
                  </Link>
                </div>
              </div>

              <div class="col-md-8">
                <div class="video-wrapper">
                  <video controls>
                    <source src="assets/video/video.mp4" type="video/mp4" />
                  </video>
                </div>{" "}
                {/* <!-- video-wrapper --> */}
              </div>
            </div>
          </div>{" "}
          {/* <!-- section-wrapper --> */}
        </div>
      </section>

      {/* <!-- Services-section --> */}

      <section class="call-to-action section-padding">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Services We Provide</h2>
            <span class="title-border"></span>
          </div>{" "}
          {/* <!-- title-bar --> */}
          <div class="action-wrapper">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="row">
                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-suitcase" aria-hidden="true"></i>
                      <h3>Software development</h3>
                      <p>
                        Creating and maintaining applications, frameworks, or
                        other software components.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>{" "}
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-database" aria-hidden="true"></i>
                      <h3>Website Development</h3>
                      <p>
                        Web development is the work involved in developing a Web
                        site for the Internet or an intranet.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box ">
                      <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                      <h3>Digital marketing</h3>
                      <p>
                        
                        Utilizes internet and online based digital technologies
                        such as desktop computers.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>
                    {/* <!-- wrapper-content --> */}
                  </div>
                </div>

                <div class="row mt-60">
                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-university" aria-hidden="true"></i>
                      <h3>Graphic design</h3>
                      <p>
                        Visual communication through the use of typography,
                        photography, iconography and illustration.{" "}
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <h3>Video Animation</h3>
                      <p>
                        Get all eyes on you with irresistible animated videos.
                        Animation and effects with your footage and photos.
                        Start now, share in minutes.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-line-chart" aria-hidden="true"></i>
                      <h3>Application Development</h3>
                      <p>
                        Process by which a mobile app is developed for mobile
                        devices, such as personal digital assistants,
                        enterprise.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>
                    {/* <!-- wrapper-content --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* <!-- action-wrapper --> */}
        </div>
      </section>

      {/* <!-- Products-section --> */}
      <section class="research-section">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Check our Products</h2>
            <span class="title-border"></span>
          </div>

          {/* Product list */}
          <div class="action-wrapper">
            <div class="row">
              <div class="col-md-12 ">
                <div class="row">
                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-suitcase" aria-hidden="true"></i>
                      <h3>Pharmacy Management Software</h3>
                      <p>
                        Creating and maintaining applications, frameworks, or
                        other software components.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>{" "}
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-database" aria-hidden="true"></i>
                      <h3>Point of Sales Software</h3>
                      <p>
                        Web development is the work involved in developing a Web
                        site for the Internet or an intranet.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>{" "}
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box ">
                      <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                      <h3>Prescription Management System</h3>
                      <p>
                        {" "}
                        Utilizes internet and online based digital technologies
                        such as desktop computers.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>{" "}
                    {/* <!-- wrapper-content --> */}
                  </div>
                </div>

                <div class="row mt-60">
                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-university" aria-hidden="true"></i>
                      <h3>Restaurant Management Software</h3>
                      <p>
                        Visual communication through the use of typography,
                        photography, iconography and illustration.{" "}
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>{" "}
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <h3>Parking Management Software</h3>
                      <p>
                        Get all eyes on you with irresistible animated videos.
                        Animation and effects with your footage and photos.
                        Start now, share in minutes.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>{" "}
                    {/* <!-- wrapper-content --> */}
                  </div>

                  <div class="col-sm-4 ">
                    <div class="wrapper-content text-center content-box">
                      <i class="fa fa-line-chart" aria-hidden="true"></i>
                      <h3>Courier Management Software</h3>
                      <p>
                        Process by which a mobile app is developed for mobile
                        devices, such as personal digital assistants,
                        enterprise.
                      </p>
                      <a href="#" class="link">
                        Details
                      </a>
                    </div>{" "}
                    {/* <!-- wrapper-content --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- counting-section --> */}
      <section class="counting-section">
        <div class="container text-center">
          <h2 class="hidden">counting-title</h2>
          <div class="counting-pusher">
            <div class="counting-wrapper">
              <div class="count-description inline-block">
                <span class="timer">07</span>
              </div>
              <p>Years of Experience</p>
            </div>{" "}
            {/* <!-- counting-wrapper --> */}
            <div class="counting-wrapper">
              <div class="count-description inline-block">
                <span class="timer">21K</span>
              </div>
              <p>Hours Of Support</p>
            </div>{" "}
            {/* <!-- counting-wrapper --> */}
            <div class="counting-wrapper">
              <div class="count-description inline-block">
                <span class="timer">95</span>
              </div>
              <p>Happy clients</p>
            </div>{" "}
            {/* <!-- counting-wrapper --> */}
            <div class="counting-wrapper">
              <div class="count-description inline-block">
                <span class="timer">50</span>
              </div>
              <p>Projects</p>
            </div>{" "}
            {/* <!-- counting-wrapper --> */}
          </div>{" "}
          {/* <!-- /.counting-pusher --> */}
        </div>
      </section>

      {/* <!-- expert-section --> */}

      {/* <section class="expert-section section-padding">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Area of Expertise</h2>
            <span class="title-border"></span>
          </div>


          <div class="section-wrapper">
            <div class="row">
              <div class="col-md-6 padding-right">
                <div class="research-content">
                  <div
                    id="research-carousel-one"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner" role="listbox">
                      <div class="item active">
                        <span class="testimonial-caption pull-left">
                          <img src="assets/images/r1.jpg" alt="image" />
                        </span>

                        <div class="">
                          <h3>Winning and retaining clients</h3>
                          <p>
                            Top consultancy firms are using professional
                            services automation to win and retain..
                          </p>
                          <a href="#">Read More</a>
                        </div>

                      </div>

                      <div class="item">
                        <span class="testimonial-caption pull-left">
                          <img src="assets/images/r2.jpg" alt="image" />
                        </span>

                        <div class="">
                          <h3>Winning and retaining clients</h3>
                          <p>
                            Top consultancy firms are using professional
                            services automation to win and retain..
                          </p>
                          <a href="#">Read More</a>
                        </div>

                      </div>
                    </div>

                    <a
                      class="left carousel-control"
                      href="#research-carousel-one"
                      role="button"
                      data-slide="prev"
                    >
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                    <a
                      class="right carousel-control"
                      href="#research-carousel-one"
                      role="button"
                      data-slide="next"
                    >
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

         

          <div class="expert-carousel owl-carousel owl-theme">
            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e1.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e2.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e3.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e1.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e2.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e3.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e1.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e2.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div class="expert-wrapper item">
              <div class="expert-caption">
                <img src="assets/images/expert/e3.jpg" alt="image" />
              </div>

              <div class="expert-content">
                <h3>Winning and retaining clients</h3>
                <p>
                  Top consultancy firms are using professional services
                  automation to win and retain..
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

        </div>
      </section>  */}

      {/* <!-- consulting-section --> */}

      <section class="consulting-section section-padding">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Check our Portfolio</h2>
            <span class="title-border"></span>
          </div>{" "}
          {/* <!-- title-bar --> */}
          <div
            id="consulting-carousel"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#consulting-carousel"
                data-slide-to="0"
                class="active"
              >
                <img src="assets/images/consult/5.png" alt="image" />
              </li>
              <li data-target="#consulting-carousel" data-slide-to="1" class="">
                <img src="assets/images/consult/6.png" alt="image" />
              </li>
              <li data-target="#consulting-carousel" data-slide-to="2" class="">
                <img src="assets/images/consult/7.png" alt="image" />
              </li>
              <li data-target="#consulting-carousel" data-slide-to="3" class="">
                <img src="assets/images/consult/8.png" alt="image" />
              </li>
              <li class="link">
                <a href="#" class="">
                  All
                </a>
              </li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="row">
                  <div class="col-sm-4 ">
                    <span class="consulting-caption">
                      <img src="assets/images/consult/5.png" alt="image" />
                    </span>
                  </div>

                  <div class="col-sm-7">
                    <div class="content-wrapper first-portfolio">
                      <h3>School management system</h3>
                      <span class="position">management Software</span>

                      <p>
                        The School management system is one stop solution for
                        managing all the appointments and reports of the
                        laboratory online. This system helps management to send
                        reports to the patient’s email address and also gives a
                        financial overview of the day.
                      </p>

                      <ul class="social-icon">
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-phone-square phone"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-envelope mail"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-linkedin linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* <!-- content-wrapper --> */}
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="row">
                  <div class="col-sm-5">
                    <span class="consulting-caption">
                      <img src="assets/images/consult/6.png" alt="image" />
                    </span>
                  </div>

                  <div class="col-sm-7">
                    <div class="content-wrapper">
                      <h3>Travel management system</h3>
                      <span class="position">management Software</span>

                      <p>
                        The Travel management system is one stop solution for
                        managing all the appointments and reports of the
                        laboratory online. This system helps management to send
                        reports to the patient’s email address and also gives a
                        financial overview of the day.
                      </p>

                      <ul class="social-icon">
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-phone-square phone"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-envelope mail"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-linkedin linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* <!-- content-wrapper --> */}
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="row">
                  <div class="col-sm-5">
                    <span class="consulting-caption">
                      <img src="assets/images/consult/7.png" alt="image" />
                    </span>
                  </div>

                  <div class="col-sm-7">
                    <div class="content-wrapper">
                      <h3>Office management system</h3>
                      <span class="position">management Software</span>

                      <p>
                        The Office management system is one stop solution for
                        managing all the appointments and reports of the
                        laboratory online. This system helps management to send
                        reports to the patient’s email address and also gives a
                        financial overview of the day.
                      </p>

                      <ul class="social-icon">
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-phone-square phone"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-envelope mail"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-linkedin linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* <!-- content-wrapper --> */}
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="row">
                  <div class="col-sm-5">
                    <span class="consulting-caption">
                      <img src="assets/images/consult/8.png" alt="image" />
                    </span>
                  </div>

                  <div class="col-sm-7">
                    <div class="content-wrapper">
                      <h3>Medicine management system</h3>
                      <span class="position">management Software</span>

                      <p>
                        The Medicine management system is one stop solution for
                        managing all the appointments and reports of the
                        laboratory online. This system helps management to send
                        reports to the patient’s email address and also gives a
                        financial overview of the day.
                      </p>

                      <ul class="social-icon">
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-phone-square phone"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-envelope mail"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="fa fa-linkedin linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* <!-- content-wrapper --> */}
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* <!-- carousel-inner --> */}
          </div>{" "}
          {/* <!-- consulting-carousel --> */}
        </div>
      </section>

      {/* <!-- testimonial-section --> */}

      <Testimonial />
    </>
  );
}
