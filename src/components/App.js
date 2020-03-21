import React, { Component } from "react";

import Table from "./Table";

/**
 * @TODO: implement filtering by
 *  - country
 *  - age
 *  - sex. orientation
 *  - gender
 *  - place of living
 *  - education
 *  - relationship status
 * 
 * @TODO: implement chart view
 */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayItems: props.store,
      displayLang: 'en'
    }
  }

  render() {
    return (
      <Table store={this.state.displayItems} displayLang={this.state.displayLang} />
    );
  }
}

export default App;
