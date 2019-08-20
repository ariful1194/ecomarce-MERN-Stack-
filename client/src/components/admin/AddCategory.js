import React, { Component } from "react";
import { connect } from "react-redux";
import { createCategory } from "../../actions/categoryAction";
import AdminNavbar from "../layout/AdminNavbar";

class AddCategory extends Component {
  state = {
    name: "",
    message: null
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    const newCat = {
      name: this.state.name
    };
    let confirm = window.confirm("Are You Sure You Want to add category!");
    if (confirm) {
      this.props.createCategory(newCat);
      this.setState({
        name: "",
        message: "Category Added Successfully!"
      });
    }
  };
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container">
          <div className="row">
            <div className=" col-md-12 text-center">
              <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                  <h1 className="bg-warning">Add Category</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              {this.state.message ? (
                <div class="alert alert-success" role="alert">
                  {this.state.message}
                </div>
              ) : (
                ""
              )}
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <label htmlFor="productname" className="loginFormElement">
                    Category Name:
                  </label>
                  <input
                    placeholder="Category Name"
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <br />
                  <button
                    type="submit"
                    id="loginSubmit"
                    className="btn btn-success btn-block"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  category: state.category
});
export default connect(
  mapStateToProps,
  { createCategory }
)(AddCategory);
