import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryAction";
import { createProduct } from "../../actions/productAction";
import AdminNavbar from "../layout/AdminNavbar";

class AddProduct extends Component {
  state = {
    name: "",
    category: "",
    prize: "",
    image: "",
    desc: "",
    errors: {},
    categories: [],
    message: null
  };
  componentDidMount() {
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
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandlerFile = e => {
    console.log("dfd");
    console.log(e.target.files[0]);
    this.setState({
      image: e.target.files[0]
    });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    const fd = new FormData();
    fd.append("image", this.state.image, this.state.image.name);
    fd.append("name", this.state.name);
    fd.append("desc", this.state.desc);
    fd.append("prize", this.state.prize);
    fd.append("category", this.state.category);

    this.props.createProduct(fd);
    this.setState({
      ...this.state,
      name: "",
      prize: "",
      image: "",
      desc: "",
      errors: {},
      categories: [],
      message: "Successfully Added Product"
    });
  };
  render() {
    const selectOptions = this.state.categories.map(option => (
      <option key={option.name} value={option._id}>
        {option.name}
      </option>
    ));

    return (
      <div>
        <AdminNavbar />
        <div className="container">
          <div className="row">
            <div className=" col-md-12 text-center">
              <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                  <h1 className="bg-warning">Add Product</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" />

            {this.state.message ? (
              <div class="alert alert-success" role="alert">
                {this.state.message}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <form onSubmit={this.submitHandler}>
                <label htmlFor="productname" className="loginFormElement">
                  Product Category:
                </label>
                <select
                  className="form-control"
                  id="category"
                  name="category"
                  value={this.state.category}
                  onChange={this.changeHandler}
                >
                  {/* <option>Please Select a Product Group</option>
                  <option>Bar Soaps</option>
                  <option>Lotions</option>
                  <option>Creams</option> */}

                  {selectOptions}
                </select>
                <div className="form-group">
                  <label htmlFor="productname" className="loginFormElement">
                    Product Name:
                  </label>
                  <input
                    placeholder="Product Name"
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="productprice" className="loginFormElement">
                    Product Price
                  </label>
                  <input
                    className="form-control"
                    id="prize"
                    name="prize"
                    type="number"
                    value={this.state.prize}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label bg-warning">
                    Product Image
                  </label>
                  &nbsp;&nbsp;&nbsp;
                  <input
                    className="filestyle"
                    data-icon="false"
                    type="file"
                    name="image"
                    id="image"
                    // value={this.state.image}
                    onChange={this.changeHandlerFile}
                  />
                </div>
                <div className="form-group">
                  <label
                    className="loginformelement"
                    htmlFor="productdescription"
                  >
                    Product Description
                  </label>
                  <input
                    id="desc"
                    name="desc"
                    className="form-control input-lg"
                    placeholder="Product Description"
                    type="text"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <button
                    type="submit"
                    id="loginSubmit"
                    className="btn btn-success btn-block"
                  >
                    Add Product
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
  category: state.category,
  product: state.product
});
export default connect(
  mapStateToProps,
  { getCategories, createProduct }
)(AddProduct);
