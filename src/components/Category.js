import React, { Component } from "react";
import uuid from "react-uuid";
import PageLoader from "./Loader";
import Res from "./Res";

export default class category extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      message: null,
      res: null,
    };
  }

  componentDidMount() {
    fetch("https://api.publicapis.org/categories")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response }, () =>
          this.initialRes(this.state.data[0])
        );
      })
      .catch((err) => this.setState({ message: err.message }));
  }

  initialRes = (initialValue) => {
    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        `https://api.publicapis.org//entries?category=${initialValue.toLowerCase()}&https=true`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ res: response.entries });
      });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ res: null });
    let fetchData = e.target.dataset.keyword;
    console.log(fetchData);
    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        `https://api.publicapis.org//entries?category=${fetchData.toLowerCase()}&https=true`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ res: response.entries });
      });
  };

  render() {
    const { data, message, res } = this.state;
    if (message && !data) return <h2>{message}</h2>;
    if (!data) return <PageLoader />;
    return (
      <div className="categories-section padding">
        <div className="container categories-flex">
          <div className="categories-table">
            {data.map((data) => {
              return (
                <ul key={uuid()}>
                  <li>
                    <button data-keyword={data} onClick={this.handleClick}>
                      {data}
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
          <Res res={res} />
        </div>
      </div>
    );
  }
}
