import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
class OrderSuccess extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <div className="jumbotron">
            <h1 className="display-4">Hello, Welcome!</h1>

            <hr className="my-4" />
            <h2>Thanks! For Your Order!</h2>
            <p>
              <u>
                Your Order Has Been placed Successfully! We will contact with u
                within 12 Hours
              </u>
            </p>
            <p className="lead">
              <Link className="btn btn-primary btn-lg" to="/" role="button">
                More Shopping
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OrderSuccess;
