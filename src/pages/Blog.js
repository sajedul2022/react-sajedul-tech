import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <section class="blog-bg">
        <div class="container">
          <div class="header-title text-center">
            <h2 class="title">Latest Insights</h2>
          </div>{" "}
          {/* <!-- header-title --> */}
        </div>
      </section>{" "}
      {/* <!-- banner-section --> */}
      <section class="expert-section section-padding">
        <div class="container">
          <div class="expert-area default-style">
            <div class="row first-part">
              <div class="expert-wrapper">
                <div class="col-md-4">
                  <div class="expert-caption">
                    <img src="assets/images/expert/e6.jpg" alt="image" />
                  </div>
                  <div class="expert-content">
                    <span class="date">Nov 11, 2017</span>
                    <h3>Winning and retaining clients</h3>
                    <p>
                      Top consultancy firms are using professional services
                      automation to win and retain..
                    </p>
                    <Link to="/single-blog">Read More</Link>
                    <a href="#" class="pull-right">
                      <i class="fa fa-commenting" aria-hidden="true"></i> 4
                      Comments
                    </a>
                  </div>{" "}
                  {/* <!-- expert-content --> */}
                </div>
              </div>{" "}
              {/* <!-- expert-wrapper --> */}
              <div class="expert-wrapper">
                <div class="col-md-4">
                  <div class="expert-caption">
                    <img src="assets/images/expert/e5.jpg" alt="image" />
                  </div>
                  <div class="expert-content">
                    <span class="date">Nov 11, 2017</span>
                    <h3>Winning and retaining clients</h3>
                    <p>
                      Top consultancy firms are using professional services
                      automation to win and retain..
                    </p>
                    <Link to="/single-blog">Read More</Link>
                    <a href="#" class="pull-right">
                      <i class="fa fa-commenting" aria-hidden="true"></i> 4
                      Comments
                    </a>
                  </div>{" "}
                  {/* <!-- expert-content --> */}
                </div>
              </div>{" "}
              {/* <!-- expert-wrapper --> */}
              <div class="expert-wrapper">
                <div class="col-md-4">
                  <div class="expert-caption">
                    <img src="assets/images/expert/e4.jpg" alt="image" />
                  </div>
                  <div class="expert-content">
                    <span class="date">Nov 11, 2017</span>
                    <h3>Winning and retaining clients</h3>
                    <p>
                      Top consultancy firms are using professional services
                      automation to win and retain..
                    </p>
                    <Link to="/single-blog">Read More</Link>
                    <a href="#" class="pull-right">
                      <i class="fa fa-commenting" aria-hidden="true"></i> 4
                      Comments
                    </a>
                  </div>{" "}
                  {/* <!-- expert-content --> */}
                </div>
              </div>{" "}
              {/* <!-- expert-wrapper --> */}
            </div>
          </div>{" "}
          {/* <!-- expert-area --> */}
          <div class="pagination-wrapper text-center">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span
                      class="icon first glyphicon glyphicon-triangle-left"
                      aria-hidden="true"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="#" class="active">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    Next
                    <span
                      class="icon glyphicon glyphicon-triangle-right"
                      aria-hidden="true"
                    ></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>{" "}
          {/* <!-- pagination-wrapper --> */}
        </div>
      </section>
    </>
  );
}
