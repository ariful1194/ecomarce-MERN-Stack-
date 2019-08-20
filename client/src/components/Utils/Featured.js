import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFeature } from "../../actions/featureAction";
import { addCart } from "../../actions/cartAction";
const uuidv4 = require("uuid/v4");

export class Featured extends Component {
  state = {
    feature: []
  };
  componentWillMount() {
    this.props.getFeature();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.feature) {
      this.setState({
        ...this.state,
        feature: nextProps.feature.feature
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
    //console.log(this.state.feature);
    let output = this.state.feature.map(product => (
      <div className="col-lg-4 col-md-6 mb-4" key={product.product._id}>
        <div className="card h-100">
          <a href="#">
            <img
              style={{ height: "250px" }}
              className="card-img-top img-thumbnail"
              src={require(`../../image/${product.product.image}`)}
              alt=""
            />
          </a>
          <div className="card-body text-center">
            <h4 className="card-title">
              <Link
                to={`/product/show/${product.product._id}`}
                className="text-warning"
              >
                <h2>{product.product.title}</h2>
                {product.product.name}
              </Link>
            </h4>
            <h5>{product.product.prize} Taka</h5>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <Link
              to={`/product/show/${product.product._id}`}
              className="btn btn-sm btn-primary"
            >
              View Details
            </Link>
            <Link
              onClick={() => {
                this.addCartClick(
                  product.product._id,
                  product.product.prize,
                  product.product.name
                );
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
        <hr />
        <h2 className="text-center">Featured Collection</h2>
        <hr />
        <div className="row d-flex justify-content-center">
          {output ? output : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  feature: state.feature
});
export default connect(
  mapStateToProps,
  { getFeature, addCart }
)(Featured);
