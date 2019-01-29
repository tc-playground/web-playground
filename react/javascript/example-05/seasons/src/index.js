import React from "react";
import ReactDOM from "react-dom";

// Class Based component
//
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor...");
    // NB: State can be initialised directly.
    this.state = { lat: null, errorMessage: "" };
  }

  // Alternative state initialisation method to constructor().
  // state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("componentDidMount...");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        // NB: 'this.setState()` is the ONLY way to update state...
        // NB: Setting state is always additive.
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        // NB: Setting state is always additive.
        this.setState({ errorMessage: err.message });
      }
    );    
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  render() {
    console.log("render...");
    // NB: Do not put slow calls in render() method!
    //     It may be called a lot!
    // NB: Conditional rendering!
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount...");
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
