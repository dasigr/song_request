import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Songs from './components/song/Songs';
import RequestSong from './components/song/RequestSong';
import About from './components/pages/About';
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

  // Request a song.
  requestSong = (title) => {
    console.log(title);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <RequestSong requestSong={this.requestSong} />
                <div className="main">
                  <Songs songs={this.state.songs} markAddedToLibrary={this.markAddedToLibrary} />
                </div>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
