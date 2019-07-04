import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import uuid from 'uuid';
import Header from './components/layout/Header';
import Songs from './components/song/Songs';
import AddSong from './components/song/AddSong';
import RequestSong from './components/song/RequestSong';
import About from './components/pages/About';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    songs: []
  }

  componentDidMount() {
    axios.get("//dev-songhits.pantheonsite.io/songs?_format=hal_json")
      .then(res => this.setState({ songs: res.data }));
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
    axios.delete(`//dev-songhits.pantheonsite.io/songs/${id}`)
      .then(res => this.setState({ songs: [...this.state.songs.filter(song => song.id !== id)] }));
  }

  // Add song.
  addSong = (title) => {
    axios.post("//dev-songhits.pantheonsite.io/songs", {
      title: title,
      artist: "Max Surban",
      added: false
    })
      .then(res => this.setState({ songs: [...this.state.songs, res.data] }));
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
