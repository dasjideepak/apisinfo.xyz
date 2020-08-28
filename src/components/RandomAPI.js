import React, { Component } from "react";

export default class Random extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://api.publicapis.org/random")
      .then((response) => response.json())
      .then((response) => {
        this.setState(() => {
          return this.state.data.push(response.entries[0]);
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="random-api-section padding">
        <div className="container">
          <h4>Random API</h4>
          <div className="api-detail">
            {/* <h3>
              {this.state.data.map((data) => {
                return <li>{data}</li>;
              })}
            </h3> */}
            <p>Description: </p>
            <h5>Auth: </h5>
            <h5>Category: </h5>
            <h5>Cors: </h5>
            <h5>Https: </h5>
            <h5>Link: </h5>
          </div>
        </div>
      </div>
    );
  }
}
