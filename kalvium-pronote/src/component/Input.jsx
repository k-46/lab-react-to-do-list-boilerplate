import React, { Component } from "react";

class Input extends Component {
  render() {
    
    return (
      <div id="input">
        <input
          type="text"
            value={this.props.inputValue}
          placeholder="Enter Your Task"
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
        <button onClick={this.props.handleSubmit}>Create</button>
      </div>
    );
  }
}

export default Input