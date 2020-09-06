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
    return (
      <div className="random-api-section padding">
        <div className="container">
          <h4>Random API</h4>
          {/* {data.map((el) => {
            console.log(el);
            return (
              <div className="api-detail">
                <p>API: {el.API}</p>
                <p>Description: {el.Description}</p>
                <h5>Auth: {el.Auth}</h5>
                <h5>Category: {el.Category}</h5>
                <h5>Cors: {el.CORS}</h5>
                <h5>Https: {el.HTTPS}</h5>
                <h5>Link: {el.Link}</h5>
              </div>
            );
          })} */}
        </div>
      </div>
    );
  }
}
