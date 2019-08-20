import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCart, removeAndResetCart } from "../../actions/cartAction";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
export class ShoppingChart extends Component {
  state = {
    cart: []
  };
  onChange = e => {
    let id = e.target.id;
    let val = e.target.value;

    if (val > 0) {
      let newState = this.state.cart.map(ct => {
        if (ct.cartId == id) {
          ct.productQuantity = val;
          return ct;
        } else {
          return ct;
        }
      });
      this.setState({
        ...this.state,
        cart: newState
      });
    }
  };
  removeHandler = e => {
    let conf = window.confirm("Are you sure!");
    if (conf) {
      let id = e.target.id;
      let newState = this.state.cart.filter(c => {
        if (c.cartId !== id) {
          return c;
        }
      });

      this.setState({
        ...this.state,
        cart: newState
      });

      this.props.removeAndResetCart(newState);
    }
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
    let output = this.state.cart
      ? this.state.cart.map(c => (
          <tr key={c.cartId}>
            <td className="col-sm-8 col-md-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    <a href="#">{c.productName}</a>
                  </h4>
                </div>
              </div>
            </td>
            <td className="col-sm-1 col-md-1" style={{ textAlign: "center" }}>
              <input
                type="number"
                className="form-control"
                id={c.cartId}
                name="qn"
                value={c.productQuantity}
                onChange={this.onChange}
              />
            </td>
            <td className="col-sm-1 col-md-1 text-center">
              <strong>{c.productPrize}</strong>
            </td>
            <td className="col-sm-1 col-md-1 text-center">
              <strong>{c.productQuantity * c.productPrize}</strong>
            </td>
            <td className="col-sm-1 col-md-1">
              <button
                id={c.cartId}
                onClick={this.removeHandler}
                type="button"
                className="btn btn-danger"
              >
                <span className="glyphicon glyphicon-remove" /> Remove
              </button>
            </td>
          </tr>
        ))
      : null;
    return (
      <div>
        <Navbar />
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {output ? output : null}
                  {/* <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>$24.59</strong>
                    </h5>
                  </td>
                </tr> */}

                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h3>{this.state.cart ? "Total" : null}</h3>
                    </td>
                    <td className="text-right">
                      <h3>
                        <strong>
                          {this.state.cart
                            ? this.state.cart.reduce(
                                (acc, item) =>
                                  (acc +=
                                    item.productQuantity * item.productPrize),
                                0
                              )
                            : null}
                        </strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <Link
                        type="button"
                        className="btn btn-primary btn-large"
                        to="/"
                      >
                        Continue Shopping
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/checkout"
                        className="btn btn-success btn-large p-3"
                      >
                        Checkout <span className="glyphicon glyphicon-play" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
  { loadCart, removeAndResetCart }
)(ShoppingChart);
