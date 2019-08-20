import React, { Component } from "react";
import Carosal from "../Utils/Carosal";
import Featured from "../Utils/Featured";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";

export class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Carosal />
          <Featured />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
