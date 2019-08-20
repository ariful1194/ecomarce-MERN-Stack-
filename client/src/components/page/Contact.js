import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { connect } from "react-redux";
import { addContact } from "../../actions/contactActions";
export class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    body: "",
    success: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      body: this.state.body
    };

    this.props.addContact(contact);
    this.setState({
      ...this.state,
      name: "",
      email: "",
      subject: "",
      body: "",
      success: "Your Info Send Successfully!"
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div>
            {/*Section: Contact v.2*/};
            <section className="mb-4">
              {/*Section heading*/}
              <h2 className="h1-responsive font-weight-bold text-center my-4 text-warning">
                Contact us
              </h2>
              {/*Section description*/}
              <p className="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </p>
              <div className="row">
                <div className="col-md-4" />

                {this.state.success ? (
                  <div class="alert alert-success" role="alert">
                    {this.state.success}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-9 mb-md-0 mb-5">
                  <form onSubmit={this.onSubmit}>
                    {/*Grid row*/}
                    <div className="row">
                      {/*Grid column*/}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            className="form-control"
                          />
                          <label htmlFor="name" className>
                            Your name
                          </label>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            className="form-control"
                          />
                          <label htmlFor="email" className>
                            Your email
                          </label>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                    {/*Grid row*/}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={this.state.subject}
                            onChange={this.onChange}
                            className="form-control"
                          />
                          <label htmlFor="subject" className>
                            Subject
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*Grid row*/}
                    {/*Grid row*/}
                    <div className="row">
                      {/*Grid column*/}
                      <div className="col-md-12">
                        <div className="md-form">
                          <textarea
                            type="text"
                            id="body"
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}
                            rows={2}
                            className="form-control md-textarea"
                            defaultValue={""}
                          />
                          <label htmlFor="body">Your message</label>
                        </div>
                      </div>
                    </div>
                    {/*Grid row*/}
                    <div className="text-center text-md-left">
                      <a
                        onClick={this.onSubmit}
                        className="btn btn-primary btn-large btn-block"
                      >
                        Send
                      </a>
                    </div>
                  </form>

                  <div className="status" />
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="fas fa-map-marker-alt fa-2x" />
                      <p>Plastic Bazaar</p>
                    </li>
                    <li>
                      <i className="fas fa-phone mt-4 fa-2x" />
                      <p>+88 01995414029</p>
                    </li>
                    <li>
                      <i className="fas fa-envelope mt-4 fa-2x" />
                      <p>hubomorfaruk1286@gmail.com</p>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
              </div>
            </section>
            {/*Section: Contact v.2*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { addContact }
)(Contact);
