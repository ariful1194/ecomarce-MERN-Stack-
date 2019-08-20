import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllContact } from "../../actions/contactActions";

import AdminNavbar from "../layout/AdminNavbar";
class ViewContact extends Component {
  state = {
    allContacts: []
  };
  componentDidMount() {
    this.props.getAllContact();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.contact) {
      this.setState({
        ...this.state,
        allContacts: nextProps.contact.all_contacts
      });
    }
  }

  render() {
    let counter = 1;
    let output = this.state.allContacts.map(ac => (
      <tr>
        <th scope="row">{counter++}</th>
        <td>{ac.name}</td>
        <td>{ac.email}</td>
        <td>{ac.subject}</td>
        <td>{ac.body}</td>
      </tr>
    ));
    return (
      <div>
        <AdminNavbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <h2 className="text-center bg-warning">
                Contacts ({this.state.allContacts.length})
              </h2>
              <table className="text-center table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
                    <th style={{ width: "400px" }} scope="col">
                      Body
                    </th>
                  </tr>
                </thead>
                <tbody>{output ? output : null}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contact: state.contact
});
export default connect(
  mapStateToProps,
  { getAllContact }
)(ViewContact);
