import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

// Functional Component
//
// const App = () => {
//     return (
//         <div className="ui container" style={ { marginTop: '10px' } }>
//             <SearchBar></SearchBar>
//         </div>
//     );
// };

class App extends React.Component {
  onSearchSubmit = term => {
    console.log("App.onSearchSubmit() : ", term);
    var apiKey = "ADD KEY!";
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization: "Client-ID " + apiKey
      }
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
