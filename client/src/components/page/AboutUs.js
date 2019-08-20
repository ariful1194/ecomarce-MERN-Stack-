import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
require("./about.css");
export class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <section id="what-we-do">
            <div class="container-fluid">
              <h2 class="section-title mb-2 h1">What we do</h2>
              <p class="text-center text-muted h5">
                Having and managing a correct marketing strategy is crucial in a
                fast moving market.
              </p>
              <div class="row mt-5">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div class="card">
                    <div class="card-block block-1">
                      <h3 class="card-title">Home Delivery</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div class="card">
                    <div class="card-block block-2">
                      <h3 class="card-title">Customar Care</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div class="card">
                    <div class="card-block block-3">
                      <h3 class="card-title">Our Blog</h3>
                      <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corporis eius accusantium perspiciatis est minus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div class="card">
                    <div class="card-block block-4">
                      <h3 class="card-title">Careers</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div class="card">
                    <div class="card-block block-5">
                      <h3 class="card-title">Best Quality</h3>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div class="card">
                    <div class="card-block block-6">
                      <h3 class="card-title">Help center</h3>
                      <p class="card-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Blanditiis dignissimos quidem ullam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutUs;
