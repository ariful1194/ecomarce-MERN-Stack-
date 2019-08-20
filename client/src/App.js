import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import ProductView from "./components/product/ProductView";
import Contact from "./components/page/Contact";
import ShoppingChart from "./components/page/ShoppingChart";
import Login from "./components/auth/Login";
import store from "./store";
import adminDashboard from "./components/dashboard/adminDashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import AddProduct from "./components/admin/AddProduct";
import ViewProduct from "./components/admin/ViewProduct";
import ViewCategory from "./components/admin/ViewCategory";
import AddCategory from "./components/admin/AddCategory";
import Checkout from "./components/page/Checkout";
import OrderSuccess from "./components/page/OrderSuccess";
import NewOrder from "./components/admin/NewOrder";
import ConfirmOrder from "./components/admin/ConfirmOrder";
import Category from "./components/page/Category";
import About from "./components/page/AboutUs";
import Search from "./components/page/Search";
import My404Component from "./components/page/My404Component";
import ViewContact from "./components/admin/ViewContact";
//check for token
if (localStorage.jwt_token) {
  //set Auth token header auth
  setAuthToken(localStorage.jwt_token);
  //decode token to get user info and exp
  const decoded = jwt_decode(localStorage.jwt_token);
  // set user and isAuthenticated

  store.dispatch(setCurrentUser(decoded));
  //check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
    //clear current profile

    //redirect to login
    window.location.href("/adminlogin");
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <Navbar /> */}
          <br />
          <Route exact path="/" component={Landing} />
          <Route exact path="/product/show/:id" component={ProductView} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoppingchart" component={ShoppingChart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/adminlogin" component={Login} />
          <Route exact path="/successorder" component={OrderSuccess} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search/:key" component={Search} />
          <Route exact path="/category/:id" component={Category} />

          <Switch>
            <PrivateRoute exact path="/dashboard" component={adminDashboard} />
          </Switch>
          {/* <Switch>
            <PrivateRoute exact path="/category/:id" component={Category} />
          </Switch> */}
          <Switch>
            <PrivateRoute exact path="/addproduct" component={AddProduct} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/contacts" component={ViewContact} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/viewproduct" component={ViewProduct} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/viewcategory" component={ViewCategory} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/addcategory" component={AddCategory} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/neworder" component={NewOrder} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/confirmorder" component={ConfirmOrder} />
          </Switch>
          <Route path="/search" exact component={My404Component} />
          {/* <Footer /> */}
        </Router>
      </Provider>
    );
  }
}

export default App;
