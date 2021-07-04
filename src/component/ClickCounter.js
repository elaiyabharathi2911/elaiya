import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    console.log(this.props.productname);
    return (
      <div>
        <h1>
          {this.props.count} {this.props.name} {this.props.productname}
        </h1>
        <button onClick={this.props.increment}>Click Here</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter,10);