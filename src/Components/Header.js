import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header class="header-section header-section-one">
        <div class="top-bar hidden-xs hidden-sm">
          <div class="container">
            <div class="row">
              <div class="col-sm-7">
                <div class="header-left-bar">
                  <ul class="contact-wrapper">
                    <li>
                      <i class="fa fa-mobile" aria-hidden="true"></i>
                      <a href="tel:+8801717468814"> +8801717468814 </a>
                    </li>
                    <li>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <a href="mailto:info@creativesoftware.com.bd">
                        info@creativesoftware.com.bd
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- header-left-bar --> */}
              </div>

              <div class="col-sm-5">
                <div class="header-right-bar text-right">
                  <ul class="contact-wrapper">
                    <li class="acces">
                      <ul>
                        <li>
                          <i class="fa fa-key" aria-hidden="true"></i>
                        </li>
                        <li>
                          <Link to="login">Login </Link> | &nbsp;
                        </li>
                        <li>
                          <Link to="register"> Register</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul class="social-icon">
                        <li>
                          <Link href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>{" "}
                {/* <!-- header-right-bar --> */}
              </div>
            </div>{" "}
            {/* <!-- top-bar --> */}
          </div>
        </div>{" "}
        {/* <!-- top-bar --> */}
        <nav className="navbar">
          <div class="container">
            <div class="navbar-header">
              <Link class="navbar-brand" to="/">
                <img
                  class="caption"
                  src="assets/images/Big-Icon.png"
                  alt="image"
                />
                <img
                  class="caption-two"
                  src="assets/images/Big-Icon.png"
                  alt="image"
                />
              </Link>
            </div>
            <div class="collapse navbar-collapse navbar-right hidden-sm">
              <ul class="nav navbar-nav">
                <li class="dropdown">
                  <Link to="#">
                    Company <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>

                  <ul class="dropdown-menu">
                    <li>
                      <Link to="/about">About US</Link>
                    </li>

                    <li>
                      <Link to="">Services</Link>

                      <ul class="sub-dropdown">
                        <li>
                          <Link to="service">Web Development</Link>
                        </li>
                        <li>
                          <Link to="service">App Development</Link>
                        </li>
                        <li>
                          <Link to="service">Software Development</Link>
                        </li>

                        <li>
                          <Link to="service">Video Animation</Link>
                        </li>
                       
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="dropdown">
                  <Link to="#">
                    Products <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </Link>

                  <ul class="dropdown-menu">
                    <li>
                      <Link to="products">Web Development Software</Link>
                    </li>
                    <li>
                      <Link to="products">App Development Software</Link>
                    </li>
                    <li>
                      <Link to="products">Inventory Software</Link>
                    </li>
                  </ul>
                </li>

                <li class="dropdown">
                  <Link to="clients">
                    Clients 
                    {/* <i class="fa fa-angle-down" aria-hidden="true"></i> */}
                  </Link>

                  {/* <ul class="dropdown-menu">
                    <li>
                      <Link to="service-grid.html">Software Development</Link>

                       <ul class="sub-dropdown">
                        <li>
                          <Link to="single-one.html">
                          Application Development
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="single-one.html">Application Development</Link>
                    </li>
                  </ul> */}

                </li>

                <li>
                  <Link to="careers">Careers</Link>
                </li>

                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    options={{
                      behavior: "top"
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!--/.nav-collapse --> */}
          </div>{" "}
          {/* <!-- container --> */}
        </nav>{" "}
        {/* <!-- navbar --> */}
      </header>
      {/* <!-- header-section --> */}
    </>
  );
}
