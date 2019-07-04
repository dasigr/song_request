import React, { Component } from 'react';
import SongItem from './SongItem';
import PropTypes from 'prop-types';

class Songs extends Component {
  render() {
    return this.props.songs.map((song) => (
      <SongItem key={song.id} song={song} markAddedToLibrary={this.props.markAddedToLibrary} />
    ));
  };
}

// PropTypes
Songs.propType = {
  songs: PropTypes.array.isRequired
}

export default Songs;
