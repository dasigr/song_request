import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import Header from './components/layout/Header';
import Songs from './components/song/Songs';
import AddSong from './components/song/AddSong';
import RequestSong from './components/song/RequestSong';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    songs: [
      {
        id: uuid.v4(),
        title: "Girl",
        artist: "Immacualte",
        added: false
      },
      {
        id: uuid.v4(),
        title: "She's Gone",
        artist: "Steelhear",
        added: false
      },
      {
        id: uuid.v4(),
        title: "Highway Star",
        artist: "Deep Purple",
        added: false
      },
      {
        id: uuid.v4(),
        title: "Crazy",
        artist: "Aerosmith",
        added: true
      },
      {
        id: uuid.v4(),
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

  // Delete song.
  delSong = (id) => {
    this.setState({ songs: [...this.state.songs.filter(song => song.id !== id)] });
  }

  // Add song.
  addSong = (title) => {
    const newSong = {
      id: uuid.v4(),
      title: title,
      artist: "Max Surban",
      added: false
    }
    this.setState({ songs: [...this.state.songs, newSong] });
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
                <AddSong addSong={this.addSong} />
                <div className="main">
                  <Songs songs={this.state.songs} markAddedToLibrary={this.markAddedToLibrary} delSong={this.delSong} />
                </div>
                <RequestSong requestSong={this.requestSong} />
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
