import React, { Component } from "react";
import uuid from "react-uuid";
import Loader from "react-loader-spinner";

export default class category extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://api.publicapis.org/categories")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        this.setState({ data: response });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="loader-page">
          <div className="flex-column center">
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            <h3>Loading APIs...</h3>
          </div>
        </div>
      );
    }
    return (
      <div className="categories-section padding">
        <div className="container">
          <div className="categories-table">
            {this.state.data.map((data) => {
              return (
                <ul key={uuid()}>
                  <li>
                    <a
                      href={`https://api.publicapis.org//entries?category=${data.toLowerCase()}&https=true`}
                    >
                      {data}
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="render-view"></div>
        </div>
      </div>
    );
  }
}
