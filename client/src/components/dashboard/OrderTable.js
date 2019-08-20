import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllOrder } from "../../actions/orderActions";
class OrderTable extends Component {
  state = {
    allOrder: []
  };
  componentDidMount() {
    this.props.getAllOrder();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.order) {
      this.setState({
        ...this.state,
        allOrder: nextProps.order.all_order
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>3</td>
          <td>Total Order</td>
          <td className="badge badge-primary">{this.state.allOrder.length}</td>
          <td>
            <Link to="/confirmorder" className="btn btn-success">
              View
            </Link>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Confirm Order</td>
          <td className="badge badge-secondary">
            {
              this.state.allOrder.filter(al => {
                if (al.status == 1) {
                  return al;
                }
              }).length
            }
          </td>
          <td>
            <Link to="/confirmorder" className="btn btn-success">
              View
            </Link>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>New Order</td>
          <td className="badge badge-danger">
            {
              this.state.allOrder.filter(al => {
                if (al.status == 0) {
                  return al;
                }
              }).length
            }
          </td>
          <td>
            <Link to="/neworder" className="btn btn-success">
              View
            </Link>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  order: state.order
});
export default connect(
  mapStateToProps,
  { getAllOrder }
)(OrderTable);
