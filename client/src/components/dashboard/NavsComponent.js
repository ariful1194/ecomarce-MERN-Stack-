import React, { Component } from "react";

import { Link } from "react-router-dom";

export class NavsComponent extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Default</td>
              <td>Defaultson</td>
              <td>def@somemail.com</td>
            </tr>
            <tr className="success">
              <td>Success</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr className="danger">
              <td>Danger</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr className="info">
              <td>Info</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr className="warning">
              <td>Warning</td>
              <td>Refs</td>
              <td>bo@example.com</td>
            </tr>
            <tr className="active">
              <td>Active</td>
              <td>Activeson</td>
              <td>act@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NavsComponent;
