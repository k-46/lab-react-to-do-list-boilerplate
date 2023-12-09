import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./component/Input.jsx";
import List from "./component/List.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      data: [],
    };
  }

  handleUpdate = (index)=>{
    const data= prompt("Edit your task")

    this.state.data[index] = data
    this.setState({data:this.state.data})
  }

  handleDelete = (index) => {
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
  };

  handleSubmit = () => {
  //   if(this.state.value!=""){
  //   this.state.data.push(this.state.value);
  //   this.setState({ value: "" });
  // }else{
  //   alert("Type Something")
  // }
  this.state.value !== "" ? (this.state.data.push(this.state.value), this.setState({ value: "" })) : alert("Type Something");

  };
  

  handleChange = (text)=>{
    
    this.setState({ value: text })
    
  }

  render() {
    
    return (
      <>
      <Input inputValue={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        {/* <div id="input">
          <input
            id="input"
            type="text"
            value={this.state.value}
            placeholder="Enter Your Task"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
          />
          <button onClick={this.handleSubmit}>Create</button>
        </div> */}
        <div id="text">
          <h1>{this.state.value}</h1>
        </div>

        {/* <div id="list">
          {this.state.data.map((e, index) => {
            return (
              <div key={index}>
                <h1>{e}</h1>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
                <button onClick={()=>this.handleUpdate(index)}>Update</button>
              </div>
            );
          })}
        </div> */}
        <List data={this.state.data} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
      </>
    );
  }
}
export default App;
