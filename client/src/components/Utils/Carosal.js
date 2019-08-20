import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCarosul } from "../../actions/carosulActions";

export class Carosal extends Component {
  state = {
    carosul: []
  };
  componentDidMount() {
    this.props.getCarosul();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.carosul) {
      this.setState({
        ...this.state,
        carosul: nextProps.carosul.carosuls
      });
    }
  }
  imgclick = name => {
    console.log(name);
  };
  render() {
    let style = {
      cursor: "pointer"
    };
    let output;
    //console.log(this.state.carosul[0]);
    ///let out = this.state.carosul.map(itm => itm.product.name);

    let out = this.state.carosul.map(item => (
      <div
        key={item.product._id}
        className={classnames("carousel-item", {
          active: item.product == this.state.carosul[0].product
        })}
      >
        <img
          style={style}
          style={{ maxHeight: "700px" }}
          onClick={() => {
            this.imgclick(item.product._id);
          }}
          className="d-block w-100 img-responsive"
          src={require(`../../image/${item.product.image}`)}
          alt="First slide"
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="display-5 text-warning font-weight-bold">
            {/* {item.product.name} */}
          </h3>
          {/* <h2 className="text-danger">{item.product.prize} Taka</h2> */}
        </div>
      </div>
    ));

    // let output = this.props.imgSource.map(img => (
    //   <div
    //     key={img.id}
    //     className={classnames("carousel-item", {
    //       active: img == this.props.imgSource[0]
    //     })}
    //   >
    //     <img
    //       style={style}
    //       onClick={() => {
    //         this.imgclick(img.name);
    //       }}
    //       className="d-block w-100 img-responsive"
    //       src={require(`../../image/${img.name}`)}
    //       alt="First slide"
    //     />
    //     <div className="carousel-caption d-none d-md-block">
    //       <h3 className="display-5 text-warning font-weight-bold">
    //         {img.title}
    //       </h3>
    //       <h2>{img.prize}</h2>
    //     </div>
    //   </div>
    // ));

    return (
      <div className="mt-5">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">{out ? out : null}</div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              style={{ filter: "invert(100%)" }}
              className="carousel-control-prev-icon text-danger"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              style={{ filter: "invert(100%)" }}
              className="carousel-control-next-icon"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  carosul: state.carosul
});

export default connect(
  mapStateToProps,
  { getCarosul }
)(Carosal);
