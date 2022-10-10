import React, { Component } from 'react';
import Ideas from './Ideas.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [
        { id: 1, quote: 'Mom I noticed you\'ve been doing a lot of Poloing today.', by: 'Edgar', date: '10/9/22' },
        { id: 2, quote: 'Were there ever any nice ninjas?', by: 'Maggie', date: '10/9/22'}
      ]
    }
  }

  render() {
    return (
      <main className="App">
        <h1>kidjournal</h1>
        <p>A place to document the amazing things your kids say!</p>
        <Ideas name="Alycia"/>
      </main>
    )
  }
}

export default App;