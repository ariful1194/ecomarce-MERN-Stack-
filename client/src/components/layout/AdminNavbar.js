import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import { clearCurrentProfile } from "../../actions/profileActions";

import { Link } from "react-router-dom";

export class AdminNavbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    console.log("logout");
    //this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto ">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Products
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/addproduct">
              Add Product
            </Link>

            <Link className="dropdown-item" to="/viewproduct">
              View Product
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Orders
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/neworder">
              New Orders
            </Link>
            <Link className="dropdown-item" to="/confirmorder">
              Confirm Orders
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/addcategory">
              Add Category
            </Link>
            <Link className="dropdown-item" to="/viewcategory">
              View Category
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacts">
            Contacts
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li> */}
        <li className="nav-item">
          <a
            href="/profile"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            {/* <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="Your must have a gravater connected to your email to display a image"
            />{" "} */}
            Logout
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* <Link className="nav-link" to="/register">
            Sign Up
          </Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <div style={{ marginTop: "-25px" }}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
          <div
            className="container"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            <Link className="navbar-brand" to="/adminlogin">
              Plastic Bazaar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {" "}
                    Developers
                  </Link>
                </li> */}
              </ul>
              {/* {guestLinks} */}
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
AdminNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminNavbar);
