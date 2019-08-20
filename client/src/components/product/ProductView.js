import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import { getProduct } from "../../actions/productAction";
import { connect } from "react-redux";
import { addCart } from "../../actions/cartAction";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
const uuidv4 = require("uuid/v4");
export class ProductView extends Component {
  state = {
    product: {
      id: 1,
      name: "3.jpg",
      title: "Sofa set",
      prize: "12000"
    },
    p: {},

    qn: 0
  };

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.product.product) {
      this.setState({
        ...this.state,
        p: nextProps.product.product
      });
    }
  }
  changHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    let confrm = window.confirm("Are you sure to add cart!");
    if (confrm) {
      //TODO : add to cart reducer ;
      let cartObj = {
        cartId: uuidv4(),
        productId: this.state.p._id,
        productQuantity: this.state.qn,
        productName: this.state.p.name,
        productPrize: this.state.p.prize
      };
      this.props.addCart(cartObj);
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br />
          <br />
          <h2 className="text-center text-warning">Product View</h2>
          <div className="row">
            <div className="col-md-4">
              <div
                className="card text-white bg-success mb-3"
                style={{ maxHeight: "30rem" }}
              >
                <div className="card-header text-center">Product Details</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="bg-warning">Title: </span> &nbsp;&nbsp;
                      {this.state.p.name}
                    </div>
                    <div className="col-md-6">
                      <span className="bg-warning">Prize: </span> &nbsp;&nbsp;
                      {this.state.p.prize}
                    </div>
                  </div>
                  <hr />
                  <p className="card-text">{this.state.p.desc}</p>
                  <hr />
                  <form onSubmit={this.submitHandler} className="form-inline">
                    <input
                      className="form-control"
                      type="number"
                      name="qn"
                      id="qn"
                      value={this.state.qn}
                      onChange={this.changHandler}
                    />
                    <input
                      className="ml-auto btn btn-warning"
                      type="submit"
                      value="Add"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-4 display-block mb-3">
              {Object.keys(this.state.p).length > 0 ? (
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: require(`../../image/${this.state.p.image}`)
                    },
                    largeImage: {
                      src: require(`../../image/${this.state.p.image}`),
                      width: 500,
                      height: 800
                    }
                  }}
                />
              ) : null}
            </div>
          </div>
          {/* <img src={require(`../../image/${this.state.product.name}`)} alt="" /> */}
        </div>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  product: state.product
});
export default connect(
  mapStateToProps,
  { getProduct, addCart }
)(ProductView);
