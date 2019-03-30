import React from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColourContext from "../context/ColourContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {

  state = { language: "english", colour: "blue" };

  onLanguageChange = (language, colour) => {
    this.setState({ language, colour });
  };

  render() {
    return (
        <div className="ui container">
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
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
