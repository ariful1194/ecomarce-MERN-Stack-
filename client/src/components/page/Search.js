import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { connect } from "react-redux";
import { getAllProduct } from "../../actions/productAction";
import { Link } from "react-router-dom";
import { addCart } from "../../actions/cartAction";
const uuidv4 = require("uuid/v4");
export class Search extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    this.props.getAllProduct();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.product) {
      this.setState({
        ...this.state,
        products: nextProps.product.products
      });
    }
  }
  addCartClick = (id, prize, name) => {
    let confrm = window.confirm("Are you sure to add cart!");
    if (confrm) {
      //TODO : add to cart reducer ;
      let cartObj = {
        cartId: uuidv4(),
        productId: id,
        productQuantity: 1,
        productName: name,
        productPrize: prize
      };
      this.props.addCart(cartObj);
    }
  };
  render() {
    let key = this.props.match.params.key;
    let abc = this.state.products.filter(pr => {
      let n = pr.name;
      if (n.toLowerCase().search(key.toLowerCase()) != -1) {
        return pr;
      }
    });
    let output = abc.map(product => (
      <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
        <div className="card h-100">
          <a href="#">
            <img
              style={{ height: "250px" }}
              className="card-img-top img-thumbnail"
              src={require(`../../image/${product.image}`)}
              alt=""
            />
          </a>
          <div className="card-body text-center">
            <h4 className="card-title">
              <Link
                to={`/product/show/${product._id}`}
                className="text-warning"
              >
                <h2>{product.title}</h2>
                {product.name}
              </Link>
            </h4>
            <h5>{product.prize} Taka</h5>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <Link
              to={`/product/show/${product._id}`}
              className="btn btn-sm btn-primary"
            >
              View Details
            </Link>
            <Link
              onClick={() => {
                this.addCartClick(product._id, product.prize, product.name);
              }}
              className="btn btn-sm btn-success"
            >
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="text-center text-warning mt-5 mb-2">
            <u>Search result</u>
            <h2 className="mt-5 text-center text-warning">
              {abc.length == 0 ? "OOOps! No Products Found!" : null}
            </h2>
            <div className="row d-flex justify-content-center">
              {output ? output : null}
            </div>
          </h2>
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
  { getAllProduct, addCart }
)(Search);
