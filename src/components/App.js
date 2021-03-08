import React from "react";
import Searchbar from "./Searchbar";

class App extends React.Component {
  onSearchSubmit(value) {
    console.log(value);
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
