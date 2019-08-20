import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewOrder, confrimOrderById } from "../../actions/orderActions";

import AdminNavbar from "../layout/AdminNavbar";

class NewOrder extends Component {
  state = {
    newOrders: []
  };
  componentDidMount() {
    this.props.getNewOrder();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.order) {
      this.setState({
        ...this.state,
        newOrders: nextProps.order.new_order
      });
    }
  }
  confirmClick = id => {
    let confrm = window.confirm("Order will be confirmed, Are you sure ? ");
    if (confrm) {
      this.props.confrimOrderById(id);
    }
  };
  render() {
    let reverse = this.state.newOrders.reverse();
    let output = reverse.map(order => (
      <tr>
        <td>
          {" "}
          {order.firstName} {order.lastName}
        </td>

        <td> {order.address} </td>
        <td>{order.desc}</td>
        <td>
          {" "}
          {order.products.map(p => (
            <ul class="list-group">
              <li class="list-group-item">
                {p.productName}-{p.productQuantity}pcs-{p.productPrize}*
                {p.productQuantity}={p.productPrize * p.productQuantity} Taka
              </li>
            </ul>
          ))}
        </td>
        <td> {order.order_date} </td>
        <td> {order.total} </td>
        <td> {order.payment} </td>
        <td> {order.last4digit} </td>
        <td> {order.mobile} </td>
        <td>
          {" "}
          <a
            className="btn btn-success"
            onClick={() => {
              this.confirmClick(order._id);
            }}
          >
            Confirm
          </a>{" "}
        </td>
      </tr>
    ));
    return (
      <div>
        <AdminNavbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 ">
              <h2 className="text-center bg-warning">
                {/* Products {this.state.allProducts.length} */}
              </h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>

                    <th className="text-center">Address</th>
                    <th className="text-center">descrition</th>
                    <th className="text-center w-100">Products</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Payment</th>
                    <th className="text-center">Last4Digit</th>
                    <th className="text-center">Mobile</th>
                    <th className="text-center">Action</th>
                    <th>&nbsp;</th>
                  </tr>
                  {output ? output : null}
                </thead>
                <tbody />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  order: state.order
});
export default connect(
  mapStateToProps,
  { getNewOrder, confrimOrderById }
)(NewOrder);
