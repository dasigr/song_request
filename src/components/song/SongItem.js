import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SongItem.css';

export class SongItem extends Component {
  getButtonStyle = () => {
    return {
      backgroundColor: this.props.song.added ? "#00ffff" : "transparent",
    }
  }

  render() {
    const { nid, title } = this.props.song;

    return (
      <div className="song-item">
        <p>
          <i className="fas fa-plus action-add-to-library" onClick={this.props.markAddedToLibrary.bind(this, nid[0].value)} style={this.getButtonStyle()}></i> {' '}
          <span dangerouslySetInnerHTML={{ __html: title[0].value }}></span> 
          <i className="fa fa-ellipsis-v action-delete-song" onClick={this.props.delSong.bind(this, nid[0].value)}></i>
        </p>
      </div>
    )
  }
}

// PropTypes
SongItem.propType = {
  song: PropTypes.object.isRequired,
  markAddedToLibrary: PropTypes.func.isRequired,
  delSong: PropTypes.func.isRequired
}

export default SongItem;
