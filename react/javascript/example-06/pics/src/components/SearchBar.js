import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick() {
    console.log("Input was clicked.");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui field">
            <label>Image Search</label>
            <input
              type="text"
              // NB: Alternative in-lined syntax.
              // onChange={(e) => console.log(e.target.value)};
              onChange={this.onInputChange}
              onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
