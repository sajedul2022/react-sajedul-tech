import React from "react";
import Testimonial from "../Components/Testimonial";

export default function Clients() {
  return (
    <div class="homePageFour">
      <section class="banner-section">
        <div class="container">
          <div class="header-title text-center">
            <h2 class="title">Clients</h2>
          </div>
        </div>
      </section> 
      <br/> <br/> <br/>

      <section class="working-section">
        <div class="container">
          <div class="title-bar text-center">
            <h2 class="title">Our Worldwide Clients.</h2>
          </div>

          <div class="working-wrapper">
            <div class="row">
              <div class="col-md-5">
                <div class="wrapper-content">
                  <p>
                    Our highly customized teams bring each client a combination
                    of deep industry knowledge and expert perspectives from
                    other industries on the challenge at stake, to offer our
                    clients fresh perspectives.
                  </p>

                 
                </div>
              </div>

              <div class="col-md-7">
                <div
                  id="working-carousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner" role="listbox">

                    <div class="item active">
                      <img src="assets/images/client/1.png" alt="image" />
                    </div>

                    <div class="item">
                      <img src="assets/images/client/2.png" alt="image" />
                    </div>

                    <div class="item">
                      <img src="assets/images/client/3.png" alt="image" />
                    </div>

                    <div class="item">
                      <img src="assets/images/client/4.png" alt="image" />
                    </div>

                  </div>

                  <a
                    class="left carousel-control"
                    href="#working-carousel"
                    role="button"
                    data-slide="prev"
                  >
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </a>
                  <a
                    class="right carousel-control"
                    href="#working-carousel"
                    role="button"
                    data-slide="next"
                  >
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="information-section">
        <div class="container">
          <h3>For any kind of query contact us</h3>
          <a href="#" class="btn btn-primary pull-right">
            Contact Us
          </a>
        </div>
      </section>

      <Testimonial />
    </div>
  );
}
