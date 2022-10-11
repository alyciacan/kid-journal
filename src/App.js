import React, { Component } from 'react';
import Ideas from './Ideas.js';
import './App.css';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    }
  }

  addEntry = (newEntry) => {
    this.setState({ entries: [...this.state.entries, newEntry] })
  }

  deleteEntry = (id) => {
    console.log(id);
    const filteredEntries = this.state.entries.filter(entry => entry.id != id);

    this.setState({ entries: filteredEntries })
  }

  render() {
    return (
      <main className="App">
        <h1>kidjournal</h1>
        <p>A place to document the amazing things your kids say!</p>
        {!this.state.entries.length && <h2>No entries yet -- add some!</h2>}
        <Ideas entries={this.state.entries} deleteEntry={this.deleteEntry} />
        <Form addEntry={this.addEntry}/>
      </main>
    )
  }
}

export default App;