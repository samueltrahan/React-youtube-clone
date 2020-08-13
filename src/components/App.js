import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'

const KEY = 'AIzaSyB6SQk5JhQ-n5iwZ2gJE4tOT5d9O86UDGM';

class App extends React.Component {

  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
        q: term
      }
    })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;
