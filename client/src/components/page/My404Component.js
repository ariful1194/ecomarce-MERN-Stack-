import React, { Component } from "react";

import { Link } from "react-router-dom";
require("./error.css");
export class My404Component extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="error-template">
                  <h1>Oops!</h1>
                  <h2>404 Not Found</h2>
                  <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                  </div>
                  <div class="error-actions">
                    <Link to="/" class="btn btn-primary btn-lg">
                      <span class="glyphicon glyphicon-home" />
                      Take Me Home{" "}
                    </Link>
                    <Link to="/contact" class="btn btn-default btn-lg">
                      <span class="glyphicon glyphicon-envelope" /> Contact
                      Support{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default My404Component;
