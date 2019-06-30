import React, { Component } from 'react';
import Header from './components/layout/Header';
import Songs from './components/Songs';
import './App.css';

class App extends Component {
  state = {
    songs: [
      {
        id: 1,
        title: "Girl",
        artist: "Immacualte",
        added: false
      },
      {
        id: 2,
        title: "She's Gone",
        artist: "Steelhear",
        added: false
      },
      {
        id: 3,
        title: "Highway Star",
        artist: "Deep Purple",
        added: false
      },
      {
        id: 4,
        title: "Crazy",
        artist: "Aerosmith",
        added: true
      },
      {
        id: 5,
        title: "November Rain",
        artist: "Guns N' Roses",
        added: false
      }
    ],
    library: [1,2,4]
  }

  // Toggled added to library.
  markAddedToLibrary = (id) => {
      this.setState({songs: this.state.songs.map(song => {
        if (song.id === id) {
          song.added = !song.added
        }
        return song;
      })});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Songs songs={this.state.songs} markAddedToLibrary={this.markAddedToLibrary} />
        </div>
        <footer>
        </footer>
      </div>
    )
  };
}

export default App;
