import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddSong extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex", padding: "1rem 0" }}>
        <input
          type="text"
          name="title"
          placeholder="Add song"
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    )
  }
}

// PropTypes
AddSong.propType = {
  addSong: PropTypes.func.isRequired
}

export default AddSong;
