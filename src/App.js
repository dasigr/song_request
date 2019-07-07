import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
// import uuid from 'uuid';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Songs from './components/song/Songs';
import AddSong from './components/song/AddSong';
import RequestSong from './components/song/RequestSong';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    songs: [],
    csrf_token: ''
  }

  componentDidMount() {
    axios.get("http://api.songrequest.local/rest/songs?_format=hal_json")
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

  // Get CSRF token.
  getCsrfToken = () => {
    axios.get('http://api.songrequest.local/rest/session/token')
      .then(res => {
        this.setState({ csrf_token: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Delete song.
  delSong = (id) => {
    axios({
      method: "delete",
      url: `http://api.songrequest.local/node/${id}?_format=hal_json`,
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'X-CSRF-Token': 'gJRqVRhvxqcKKhHJ57RuYwdLj-K9q6FfBjIixmLAdbU',
        'Accept': 'application/json'
      },
      // withCredentials: true,
      // auth: {
      //   username: "admin",
      //   password: "admin"
      // }
    })
      .then(res => this.setState({ songs: [...this.state.songs.filter(song => song.nid[0].value !== id)] }))
      .catch(function (error) {
        console.log(error);
      });
  }

  // Add song.
  addSong = (title) => {
    axios({
      method: "post",
      url: "http://api.songrequest.local/entity/node?_format=hal_json",
      headers: {
        'Content-Type': 'application/hal+json',
        'X-CSRF-Token': 'gJRqVRhvxqcKKhHJ57RuYwdLj-K9q6FfBjIixmLAdbU',
        'Accept': 'application/json'
      },
      // withCredentials: true,
      // auth: {
      //   username: "admin",
      //   password: "admin"
      // },
      data: {
        _links: {
          type: {
            href: "http://api.songrequest.local/rest/type/node/song"
          }
        },
        title: [
          {
            value: 'React: ' + title
          }
        ],
        type: [
          {
            target_id: "song"
          }
        ]
      }
    })
      .then(res => this.setState({ songs: [...this.state.songs, res.data] }))
      .catch(function (error) {
        console.log(error);
      });
  }

  // Request a song.
  requestSong = (title) => {
    console.log(title);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main-wrapper">
            <div className="container">
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddSong addSong={this.addSong} />
                  <div className="songs">
                    <Songs songs={this.state.songs} markAddedToLibrary={this.markAddedToLibrary} delSong={this.delSong} />
                  </div>
                  <RequestSong requestSong={this.requestSong} />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    )
  };
}

export default App;
