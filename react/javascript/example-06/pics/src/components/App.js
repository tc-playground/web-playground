import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";

class App extends React.Component {

  state = { images: [] };

  // Async/Await version
  //
  onSearchSubmit = async (term) => {
    console.log("App.onSearchSubmit() : ", term);
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      },
    });
    console.log("Response results: ", response.data.results);
    this.setState( { images: response.data.results } );
  };

  // Promise Version
  //
  // onSearchSubmit (term) {
  //   console.log("App.onSearchSubmit() : ", term);
  //   var apiKey = "SECRET_API_KEY";
  //   axios.get("https://api.unsplash.com/search/photos", {
  //     params: {
  //       query: term
  //     },
  //     headers: {
  //       Authorization: "Client-ID " + apiKey
  //     }
  //   })
  //   .then(response => {
  //     console.log("Response results: ", response.data.results);
  //   });
  // };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <br/>
        Found { this.state.images.length } images!
      </div>
    );
  }
}

export default App;
