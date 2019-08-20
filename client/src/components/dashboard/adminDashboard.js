import React, { Component } from "react";
import AdminNavbar from "../layout/AdminNavbar";
import NavsComponent from "./NavsComponent";
import HomeComponent from "./HomeComponent";

export class adminDashboard extends Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <HomeComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default adminDashboard;
