import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCategories,
  getAllCatProduct,
  deleteCategory
} from "../../actions/categoryAction";

import AdminNavbar from "../layout/AdminNavbar";
class ViewCategory extends Component {
  state = {
    allCategories: [],
    allProducts: []
  };
  componentDidMount() {
    this.props.getCategories();
    this.props.getAllCatProduct();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.category) {
      this.setState({
        ...this.state,
        allCategories: nextProps.category.categories,
        allProducts: nextProps.category.products
      });
    }
  }
  deleteClick = id => {
    let confrm = window.confirm(
      "Category Will Be  Delete Parmanently, Are you sure ? "
    );
    if (confrm) {
      this.props.deleteCategory(id);
    }
  };
  render() {
    let reversecat = this.state.allCategories.reverse();
    let sr = 1;
    let output = reversecat.map(cat => (
      <tr>
        <td> {sr++} </td>
        <td> {cat.name} </td>
        <td>
          {
            this.state.allProducts.filter(pr => pr.category._id === cat._id)
              .length
          }
        </td>
        <td>
          <a
            className="btn btn-danger"
            onClick={() => {
              this.deleteClick(cat._id);
            }}
          >
            Delete
          </a>
        </td>
      </tr>
    ));
    return (
      <div>
        <AdminNavbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <h2 className="text-center bg-warning">
                {/* Category ({this.state.allCategories.length}) */}
              </h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Category</th>
                    <th>Total Product</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {<tbody> {output ? output : null}</tbody>}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  category: state.category,
  product: state.product
});
export default connect(
  mapStateToProps,
  { getCategories, getAllCatProduct, deleteCategory }
)(ViewCategory);
