import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCategories, getAllCatProduct } from "../../actions/categoryAction";
import { getAllOrder } from "../../actions/orderActions";
import OrderTable from "./OrderTable";
export class HomeComponent extends Component {
  state = {
    allProducts: [],
    allCategory: [],
    allOrder: []
  };
  componentDidMount() {
    this.props.getCategories();
    this.props.getAllCatProduct();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.category) {
      this.setState({
        ...this.state,
        allCategory: nextProps.category.categories,
        allProducts: nextProps.category.products
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="bg-warning text-center">Summery</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>1</td>
              <td>Total Product</td>
              <td className="badge badge-info">
                {this.state.allProducts.length}
              </td>
              <td>
                <Link to="/viewproduct" className="btn btn-success">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Total category</td>
              <td className="badge badge-warning">
                {this.state.allCategory.length}
              </td>
              <td>
                <Link to="viewcategory" className="btn btn-success">
                  View
                </Link>
              </td>
            </tr>
            <OrderTable />
            {/* <tr>
              <td>3</td>
              <td>Total Order</td>
              <td>{this.state.allOrder.length}</td>
              <td>
                <Link className="btn btn-success">View</Link>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  category: state.category
});
export default connect(
  mapStateToProps,
  { getCategories, getAllCatProduct }
)(HomeComponent);
