import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async query => {
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: query
      }
    });
    this.setState({
      images: response.data.results
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
