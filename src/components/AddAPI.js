import React, { Component } from "react";

export default class AddAPI extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  handleSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="add-api-section padding">
        <div className="container">
          <form method="post" action="mailto" className="add-adpi-form">
            <label for="input">API Name</label>
            <input id="" className="" value="" onChange="" />
            <label for="input">API Category</label>
            <input id="" className="" value="" onChange="" />
            <label for="input">API Documentation URL</label>
            <input id="" className="" value="" onChange="" />
          </form>
        </div>
      </div>
    );
  }
}
