import React, { Component } from 'react';
import Key from './key'
import './App.css';
//import Scale from './Scale'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      keySelect: "A"
    }
  }

  changekey(keyCh){
    this.setState({
      keySelect: keyCh
    })
  }

  render() {
    return (
      <div class="App">
        <Key />
      </div>
    );
  }
}

export default App;
