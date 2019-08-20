import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProduct, deleteProduct } from "../../actions/productAction";
import Pagination from "react-bootstrap/Pagination";
import AdminNavbar from "../layout/AdminNavbar";

class ViewProduct extends Component {
  state = {
    allProducts: [],
    active: 1,
    currentPage: 1
  };
  configShowItem = i => {
    this.setState({
      ...this.state,
      currentPage: i,
      active: i
    });
  };
  componentDidMount() {
    this.props.getAllProduct();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.product) {
      this.setState({
        ...this.state,
        allProducts: nextProps.product.products.reverse()
      });
    }
  }
  deleteClick = id => {
    let confrm = window.confirm(
      "Product Will Be  Delete Parmanently, Are you sure ? "
    );
    if (confrm) {
      this.props.deleteProduct(id);
    }
  };
  render() {
    this.state.allProducts.reverse();
    let reverseProducts = this.state.allProducts.reverse();
    let currentIndex = this.state.currentPage - 1;

    const page = Math.ceil(reverseProducts.length / 10);
    let items = [];
    for (let number = 1; number <= page; number++) {
      items.push(
        <Pagination.Item
          onClick={() => {
            this.configShowItem(number);
          }}
          key={number}
          active={number === this.state.active}
        >
          <span>{number}</span>
        </Pagination.Item>
      );
    }

    let output = reverseProducts.map(product => (
      <tr>
        <td> {product.name} </td>
        <td> {product.category.name} </td>
        <td> {product.prize} </td>
        <td>
          <h5>{product.desc}</h5>
        </td>
        <td className="text-right">
          <img
            style={{ height: "100px", width: "100px" }}
            src={require(`../../image/${product.image}`)}
            alt=""
            srcset=""
          />
        </td>
        <td>
          {" "}
          <a
            className="btn btn-danger"
            onClick={() => {
              this.deleteClick(product._id);
            }}
          >
            Delete
          </a>{" "}
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
                Products {this.state.allProducts.length}
              </h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">descrition</th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Action</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td> Chair&nbsp; </td>
                    <td> RFL&nbsp; </td>
                    <td> 555&nbsp; </td>
                    <td>
                      <h5>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eum in at tempore dicta ipsa dolore quisquam
                        laudantium quas, animi voluptatibus?
                      </h5>
                    </td>
                    <td className="text-right">
                      <img
                        style={{ height: "100px", width: "100px" }}
                        src="https://picsum.photos/id/465/200/300"
                        alt=""
                        srcset=""
                      />
                    </td>
                    <td>
                      {" "}
                      <a className="btn btn-danger">Delete</a>{" "}
                    </td>
                  </tr> */}

                  {/* {output ? output : null} */}
                  {this.state.allProducts.length > 0
                    ? this.state.allProducts
                        .slice(currentIndex * 10, currentIndex * 10 + 10)
                        .map(product => (
                          <tr>
                            <td> {product.name} </td>
                            <td> {product.category.name} </td>
                            <td> {product.prize} </td>
                            <td>
                              <h5>{product.desc}</h5>
                            </td>
                            <td className="text-right">
                              <img
                                style={{ height: "100px", width: "100px" }}
                                src={require(`../../image/${product.image}`)}
                                alt=""
                                srcset=""
                              />
                            </td>
                            <td>
                              {" "}
                              <a
                                className="btn btn-danger"
                                onClick={() => {
                                  this.deleteClick(product._id);
                                }}
                              >
                                Delete
                              </a>{" "}
                            </td>
                          </tr>
                        ))
                    : null}
                </tbody>
              </table>
              <Pagination className="d-flex justify-content-center">
                {items}
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  product: state.product
});
export default connect(
  mapStateToProps,
  { getAllProduct, deleteProduct }
)(ViewProduct);
