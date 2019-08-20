import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-info text-warning mt-5 p-4 text-center font-weight-bold">
          CopyRight &copy;{new Date().getFullYear()}{" "}
          <a
            style={{ fontSize: "20px", color: "blue" }}
            href="https://www.facebook.com/umar.faruk.180625"
          >
            Omor Faruk
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
