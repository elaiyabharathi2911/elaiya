import React, { Component } from "react";

class ChildLifeCycleComponet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hello world",
    };
    console.log("Constructor initilized from ChildLifeCycleComponent")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps from ChildLifeCycleComponent");
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount from ChildLifeCycleComponent")
  }

  render() {
      console.log("Rendering from ChildLifeCycleComponent ")
    return <div>{this.state.name}</div>;
  }
}

export default ChildLifeCycleComponet;