import React, { Component } from 'react';
import SongItem from './SongItem';
import PropTypes from 'prop-types';

class Songs extends Component {
  render() {
    return this.props.songs.map((song) => (
      <SongItem key={song.nid[0].value} song={song} markAddedToLibrary={this.props.markAddedToLibrary} delSong={this.props.delSong} getSong={this.props.getSong} />
    ));
  };
}

// PropTypes
Songs.propType = {
  songs: PropTypes.array.isRequired,
  markAddedToLibrary: PropTypes.func.isRequired,
  delSong: PropTypes.func.isRequired
}

export default Songs;
