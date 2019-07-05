import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SongItem extends Component {
    getStyle = () => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc solid"
        }
    }

    getButtonStyle = () => {
        return {
            backgroundColor: this.props.song.added ? "#00ffff" : "transparent",
            padding: "1px 4px",
            border: "1px #ccc solid",
            borderRadius: "4px",
            cursor: "pointer"
        }
    }

    render() {
        const {id, title} = this.props.song;

        return (
            <div style={this.getStyle()}>
                <p><i className="fa fa-add" onClick={this.props.markAddedToLibrary.bind(this, id)} style={this.getButtonStyle()}>+</i> <span dangerouslySetInnerHTML={{ __html: title }}></span> <button onClick={this.props.delSong.bind(this, id)} style={delBtnStyle}>X</button></p>
            </div>
        )
    }
}

// Styles
const delBtnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}

// PropTypes
SongItem.propType = {
  song: PropTypes.object.isRequired,
  markAddedToLibrary: PropTypes.func.isRequired,
  delSong: PropTypes.func.isRequired
}

export default SongItem;
