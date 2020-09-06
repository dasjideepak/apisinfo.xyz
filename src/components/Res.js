import React, { Component } from "react";
import uuid from "react-uuid";

export default class Res extends Component {
  render() {
    const { res } = this.props;
    if (!res) return <h2>Loading...</h2>;
    return (
      <div className="render-view">
        {res.map((data) => {
          return (
            <ul key={uuid()}>
              <a href={data.Link} className="api-data">
                API: {data.API}
                Auth: {data.Auth}
                Category: {data.Category}
                Cors: {data.Cors}
                Description: {data.API}
                HTTPS: {data.API}
              </a>
            </ul>
          );
        })}
      </div>
    );
  }
}
