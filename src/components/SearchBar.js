import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="search-bar ui segment">
          <form className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
