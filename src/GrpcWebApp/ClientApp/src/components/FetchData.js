import React, { Component } from 'react';
import { insertEmployeeAsync, selectAllEmployees } from '../proto/client.js'

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
      super(props);
      this.state = { forecasts: [], loading: false };
  }

  componentDidMount() {
    //  this.callGrpc();
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : <p><em>Empty</em></p>;

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
           <button onClick={() => this.handleClick()}>Click Me</button>
      </div>
    );
  }

    handleClick() {
        selectAllEmployees(console.log);
    }

}
