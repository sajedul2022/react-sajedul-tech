import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-part">
            <div class="row">
              <div class="col-sm-4 col-md-4 ">
                <div class="footer-wrapper">
                  <span class="footer-logo">
                    <img src="assets/images/Big-Icon.png" alt="image" />
                  </span>
                  <p>
                    Office: Panthapath, Dhanmondi, Dhaka. <br /> Phone: (+88) 01
                    717 468 814 <br /> Email: info@creativesoftware.com.bd{" "}
                    <br />
                    Website: www.creativesoftware.com.bd
                  </p>
                  <ul class="time-part">
                    <li>
                      <span>Sat - Thurs</span>: 9am - 9pm
                    </li>
                  </ul>{" "}
                  {/* <!-- social-icon --> */}
                </div>{" "}
                {/* <!-- footer-wrapper --> */}
              </div>

              {/* <div class="col-sm-6 col-md-3">
                <div class="footer-wrapper">
                  <h3>Recent News</h3>
                  <div class="recent-post">
                    <div class="caption pull-left">
                      <img src="assets/images/footer/p1.jpg" alt="image" />
                    </div>

                    <div class="content">
                      <p>UK inflation rate falls in October</p>
                      <span class="time">
                        <i class="fa fa-clock-o" aria-hidden="true"></i> May 29,
                        2017
                      </span>
                    </div>
                  </div>{" "}
                  
                  <div class="recent-post second-post">
                    <div class="caption pull-left">
                      <img src="assets/images/footer/p1.jpg" alt="image" />
                    </div>

                    <div class="content">
                      <p>UK inflation rate falls in October</p>
                      <span class="time">
                        <i class="fa fa-clock-o" aria-hidden="true"></i> May 29,
                        2017
                      </span>
                    </div>
                  </div>{" "}
                  
                </div>{" "}
                
              </div> */}

              <div class="col-sm-4 col-md-4 text-center">
                <div class="footer-wrapper">
                  <h3>Links</h3>
                  <ul class="page-link">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                      <Link to="/be-partner">BE Partner</Link>
                    </li>
                  </ul>{" "}
                  {/* <!-- page-link --> */}
                </div>{" "}
                {/* <!-- footer-wrapper --> */}
              </div>

              <div class="col-sm-4 col-md-4">
                <div class="footer-wrapper">
                  <h3>Newsletter</h3>
                  <form class="footer-form form-horizontal">
                    <div class="form-group">
                      <input
                        class="footerSearchBar form-control"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>

                    <div class="form-group">
                      <button type="submit" class="subscribeBtn">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      </button>
                    </div>
                  </form>
                  <h3 class="social-title">Social Media</h3>
                  <ul class="social-media">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- social-media --> */}
                </div>
                {/* <!-- footer-wrapper --> */}
              </div>

              {/* footer menu */}

              <div class="col-sm-12 ">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <Link to="/about">About Us </Link>
                    </li>
                    <li>
                      <Link to="/feedback">Feedback</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/sitemap">Sitemap</Link>
                    </li>
                    <li>
                      <Link to="/terms-use">Terms of Use</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/refund-policies">Refund Policies</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* <!-- footer-one --> */}
        </div>
        <div class="copyright-section">
          <div class="container">
            <p class="inline-block">
              © 2015-2023 All Rights Reserved.
              <span>
                <Link to="/">Creative Software.</Link>
              </span>
            </p>
          </div>
        </div>{" "}
        {/* <!-- copyright-section --> */}
      </footer>
      {/* <!-- footer-section --> */}

      {/* whatsapp */}

      <a
        href="https://api.whatsapp.com/send/?phone=+8801717468814&amp;text&amp;app_absent=0"
        class="btn-whatsapp-pulse"
        target="_blank"
      >
        <i class="fa fa-whatsapp"></i>
      </a>

      {/* Mobile Menu */}

      {/* <span class="menu-toggle navbar visible-xs visible-sm">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </span>

      <div id="offcanvas-menu" class="visible-xs visible-sm">
        <span class="close-menu">
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>

        <ul class="menu-wrapper">
          <li>
            <a class="active dropBar" href="/">
              Company <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>

            <ul class="dropMenu sub-menu">
              <li>
                <a class="active" href="/about">
                  About US
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" class="dropBar">
              {" "}
              Services <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <ul class="dropMenu sub-menu">
              <li>
                <a href="single-one.html">Web Development</a>
              </li>
              <li>
                <a href="single-two.html">App Development</a>
              </li>
              <li>
                <a href="single-three.html">Software Development</a>
              </li>
              <li>
                <a href="single-four.html">Video Animation</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" class="dropBar">
              Products <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <ul class="dropMenu sub-menu">
              <li>
                <a href="single-one.html">Web Development Software</a>
              </li>
              <li>
                <a href="single-two.html">App Development </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" class="dropBar">
              {" "}
              Clients{" "}
            </a>
          </li>

          <li>
            <a href="contact.html">Careers</a>
          </li>

          <li>
            <a href="contact.html">Blog</a>
          </li>

          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div> */}

    </>
  );
}
