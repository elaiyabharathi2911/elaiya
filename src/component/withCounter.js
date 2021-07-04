import React from "react";

const withCounter = (WrappedComponent,incrementValue) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementValue };
      });
    };

    render() {
      return (
        <WrappedComponent
          name="Hello world"
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;