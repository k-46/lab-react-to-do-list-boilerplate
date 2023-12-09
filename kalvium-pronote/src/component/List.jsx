import React, { Component } from "react";

export default class List extends Component {

  render() {
    return (
      <div id="list">
        {this.props.data.map((e, index) => {
          return (
            <div key={index}>
              <h1>{e}</h1>
              <button onClick={() => this.props.handleDelete(index)}>
                Delete
              </button>
              <button onClick={() => this.props.handleUpdate(index)}>
                Update
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
