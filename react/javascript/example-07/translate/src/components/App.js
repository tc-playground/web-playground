import React from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColourContext from "../context/ColourContext";

class App extends React.Component {
  state = { language: "english", colour: "blue" };

  onLanguageChange = (language, colour) => {
    this.setState({ language, colour });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english", "blue")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch", "red")}
          />
          {this.state.language}
        </div>
        {/* prop name must be 'value' */}
        <LanguageContext.Provider value={this.state.language}>
          <ColourContext.Provider value={this.state.colour}>
            <UserCreate/>
          </ColourContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
