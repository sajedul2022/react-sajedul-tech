import React from "react";

export default function Testimonial() {
  return (
    <>
      <section class="testimonial-section section-padding">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Clients’ Testimonials</h2>
            <span class="title-border"></span>
          </div>

          <div class="row text-center">
            <div class="col-md-10 col-md-offset-1">
              <div
                id="testimonial-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#testimonial-carousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#testimonial-carousel"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#testimonial-carousel"
                    data-slide-to="2"
                  ></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                  <div class="item active">

                    <div class="carousel-wrapper">
                      <span class="caption">
                        <img
                          src="assets/images/testimonial/t1.jpg"
                          alt="image"
                        />
                      </span>

                      <h3>
                        <a href="#">Jimmy Tallon</a>
                      </h3>
                      <ul class="commend">
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>

                      <p>
                        Knowledge is spread out across the organization. It can
                        take too long to find the asset with the information
                        needed. Great people, great clients, and you get to be a
                        part of an organization that is changing the world.
                      </p>
                    </div>
                    
                  </div>

                  <div class="item">
                    <div class="carousel-wrapper">
                      <span class="caption">
                        <img
                          src="assets/images/testimonial/t2.jpg"
                          alt="image"
                        />
                      </span>

                      <h3>
                        <a href="#">Hasib Sharif</a>
                      </h3>
                      <ul class="commend">
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>

                      <p>
                        Knowledge is spread out across the organization. It can
                        take too long to find the asset with the information
                        needed. Great people, great clients, and you get to be a
                        part of an organization that is changing the world.
                      </p>
                    </div>
                  </div>

                  <div class="item">
                    <div class="carousel-wrapper">
                      <span class="caption">
                        <img
                          src="assets/images/testimonial/t3.jpg"
                          alt="image"
                        />
                      </span>

                      <h3>
                        <a href="#">Tallon Jimmy</a>
                      </h3>
                      <ul class="commend">
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>

                      <p>
                        Knowledge is spread out across the organization. It can
                        take too long to find the asset with the information
                        needed. Great people, great clients, and you get to be a
                        part of an organization that is changing the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="btn btn-primary">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="testimonial-section section-padding">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Clients’ Testimonials</h2>
            <span class="title-border"></span>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="row text-center">
                <div class="col-sm-4">
                  <div class="testimonial-wrapper text-center">
                    <span class="testimonial-caption">
                      <img src="assets/images/testimonial/t1.jpg" alt="image" />
                    </span>

                    <h3>
                      <a href="#">Abada Akter zahan</a>
                    </h3>
                    <h5>
                      <a href="#">
                        Head Master at Tamiza Khatun Govt Girls High School
                      </a>
                    </h5>
                    <ul class="commend">
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>

                    <p>
                      Quality is always there. Top of the Software Company in
                      terms of that exhibit companies.
                    </p>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="testimonial-wrapper text-center">
                    <span class="testimonial-caption">
                      <img src="assets/images/testimonial/t2.jpg" alt="image" />
                    </span>

                    <h3>
                      <a href="#">Tapon Sarker</a>
                    </h3>
                    <h5>
                      <a href="#">Principal Architect at 3Points Consultant </a>
                    </h5>
                    <ul class="commend">
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>

                    <p>
                      Thanks for a great service, Creative Software– well worth
                      the cost. I really like that.
                    </p>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="testimonial-wrapper text-center">
                    <span class="testimonial-caption">
                      <img
                        src="assets/images/testimonial/t-3.jpg"
                        alt="image"
                      />
                    </span>

                    <h3>
                      <a href="#">Eliash Hossain</a>
                    </h3>
                    <h5>
                      <a href="#">
                        Managing Director at Liza and Ruma International
                      </a>
                    </h5>
                    <ul class="commend">
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>

                    <p>
                      Quality is always there. Top of the Software Company in
                      terms of that exhibit companies.
                    </p>
                  </div>
                </div>

                <a href="#" class="btn btn-primary">
                  <i class="fa fa-unlock-alt" aria-hidden="true"></i>View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
    </>
  );
}
