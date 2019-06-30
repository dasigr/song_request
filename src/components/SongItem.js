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
                <p><i className="fa fa-add" onClick={this.props.markAddedToLibrary.bind(this, id)} style={this.getButtonStyle()}>+</i> {title}</p>
            </div>
        )
    }
}

// PropTypes
SongItem.propType = {
  song: PropTypes.object.isRequired
}

export default SongItem;
