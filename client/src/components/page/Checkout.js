import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCart } from "../../actions/cartAction";
import { addorder } from "../../actions/orderActions";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export class Checkout extends Component {
  state = {
    cart: [],
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    desc: "",
    payment: "",
    mobile: "",
    last4digit: ""
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  selectedOption = val => {
    this.setState({
      ...this.state,
      payment: val
    });
  };
  submitHandler = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      address,
      desc,
      payment,
      mobile,
      last4digit
    } = this.state;
    let newOrder = {
      firstName,
      lastName,
      email,
      address,
      desc,
      payment,
      mobile,
      last4digit,
      products: JSON.parse(localStorage.getItem("cart"))
    };
    localStorage.setItem("cart", "");
    this.props.addorder(newOrder, this.props.history);
  };
  componentDidMount() {
    this.props.loadCart();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.cart) {
      this.setState({
        ...this.state,
        cart: nextProps.cart.cart
      });
    }
  }
  render() {
    let cartOutput = this.state.cart.map(c => (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{c.productName}</h6>
          <small className="text-muted">{`${c.productQuantity} pcs.`}</small>
        </div>
        <span className="text-muted">
          {c.productPrize * c.productQuantity} Taka
        </span>
      </li>
    ));
    return (
      <div>
        <Navbar />
        <div className="container">
          <div>
            {/*Section: Contact v.2*/};
            <section className="mb-4">
              {/*Section heading*/}
              <h2 className="h1-responsive font-weight-bold text-center my-4 text-warning">
                Checkout form
              </h2>
              {/*Section description*/}
              {/* <p className="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </p> */}
              <div className="container">
                <div className="row py-5">
                  <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Your cart</span>
                      <span className="badge badge-secondary badge-pill">
                        {this.state.cart.length}
                      </span>
                    </h4>
                    <ul className="list-group mb-3">
                      {cartOutput ? cartOutput : null}
                      <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                          <h6 className="my-0">Shipping cost</h6>
                        </div>
                        <span className="text-success">+150 Taka</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total (BDT)</span>
                        <strong>
                          {this.state.cart.reduce(
                            (acc, item) =>
                              (acc += item.productQuantity * item.productPrize),
                            0
                          ) + 150}{" "}
                          Taka
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form
                      onSubmit={this.submitHandler}
                      className="needs-validation"
                      noValidate
                    >
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="firstName">First name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.changeHandler}
                            required
                          />
                          <div className="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="lastName">Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.changeHandler}
                            required
                          />
                          <div className="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                          placeholder="you@example.com"
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={this.state.address}
                          onChange={this.changeHandler}
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="desc"
                          name="desc"
                          value={this.state.desc}
                          onChange={this.changeHandler}
                          placeholder="Any Description"
                          required={true}
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <hr className="mb-4" />
                      <h4 className="mb-3">Payment</h4>
                      <div className="d-block my-3">
                        <input
                          onChange={() => this.selectedOption("bkash")}
                          className="from-control"
                          type="radio"
                          name="payment"
                          value="bkash"
                        />{" "}
                        Bkash &nbsp;
                        <input
                          onChange={() => this.selectedOption("roket")}
                          type="radio"
                          name="payment"
                          value="roket"
                        />{" "}
                        Roket &nbsp;
                        <input
                          onChange={() => this.selectedOption("nogod")}
                          type="radio"
                          name="payment"
                          value="nogod"
                        />{" "}
                        Nogod &nbsp;
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-name">Mobile Number</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                            id="mobile"
                            name="mobile"
                            placeholder
                            required
                          />
                          <small className="text-muted">
                            Your Mobile Number
                          </small>
                          <div className="invalid-feedback">
                            Name on card is required
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-number">
                            Last 4 digit of your payment number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="last4digit"
                            name="last4digit"
                            value={this.state.last4digit}
                            onChange={this.changeHandler}
                            placeholder
                            required
                          />
                          <small className="text-muted bg-warning">
                            Our payment number 0171111122
                          </small>
                          <div className="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>
                      </div>
                      <hr className="mb-4" />
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        <i className="fa fa-credit-card" /> Continue to checkout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/*Section: Contact v.2*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(
  mapStateToProps,
  { loadCart, addorder }
)(Checkout);
