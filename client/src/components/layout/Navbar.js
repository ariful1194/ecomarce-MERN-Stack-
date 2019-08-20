import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getCategories } from "../../actions/categoryAction";

export class Navbar extends Component {
  state = {
    search: "",
    categories: []
  };
  componentWillMount() {
    this.props.getCategories();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.category) {
      this.setState({
        ...this.state,
        categories: nextProps.category.categories
      });
    }
  }
  searchHandler = event => {
    event.preventDefault();
    window.location.href = `/search/${this.state.search}`;
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const categorylist = this.state.categories.map(ct => (
      <Link className="dropdown-item" to={`/category/${ct._id}`}>
        {ct.name}
      </Link>
    ));
    const guestLinks = (
      <ul className="navbar-nav ml-auto font-weight-bold">
        <li className="nav-item">
          <form onSubmit={this.searchHandler} className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              id="search"
              value={this.state.search}
              onChange={this.changeHandler}
            />
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </li>
      </ul>
    );
    return (
      <div>
        <nav
          style={{ fontSize: "22px" }}
          className=" font-weight-bold navbar fixed-top  navbar-expand-sm navbar-light bg-info"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <span style={{ fontSize: "22px" }} className="text-warning">
                Plastic Bazaar
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="ml-5 collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {" "}
                    <span className="font-weight-bold  ">Home</span>
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
                    <span className="font-weight-bold ">Category</span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {categorylist ? categorylist : null}
                    {/* <Link className="dropdown-item" to="#">
                      RFL Plastic
                    </Link>
                    <a className="dropdown-item" href="#">
                      Bengal Plastic
                    </a>
                    <a className="dropdown-item" href="#">
                      Delta Plastic
                    </a>
                    <a className="dropdown-item" href="#">
                      Brothers Plastic
                    </a> */}
                    {/* <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a> */}
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    {" "}
                    <span className="font-weight-bold ">Contact</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {" "}
                    <span className="font-weight-bold ">About Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shoppingchart">
                    {" "}
                    <span className="font-weight-bold ">
                      <i className="fas fa-shopping-cart" /> Cart
                    </span>
                  </Link>
                </li>
              </ul>

              {guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  category: state.category
});
export default connect(
  mapStateToProps,
  { getCategories }
)(Navbar);
