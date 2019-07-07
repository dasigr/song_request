import React, { Component } from 'react'

export class RequestSong extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.requestSong(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex", padding: "1rem 0" }}>
        <input
          type="text"
          name="title"
          placehoder="Song title"
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="Request"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    )
  }
}

export default RequestSong;
