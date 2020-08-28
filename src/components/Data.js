import React, { Component } from "react";
import uuid from "react-uuid";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {
      a: null,
    };
  }

  componentDidMount() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://api.publicapis.org/entries?category=animals&https=true";
    fetch(url)
      .then((data) => data.json())
      .then((data) => this.setState({ a: data.entries }))
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.a) {
      return <h1>Please Wait...</h1>;
    }
    console.log(this.state);
    // let data = this.state.a.map((data) => data.API);
    // console.log(data);
    return (
      <>
        {this.state.a.map((el) => {
          return (
            <ul key={uuid()}>
              {el.API} {el.Description}
            </ul>
          );
        })}
      </>
    );
  }
}
