import React, { Component } from 'react';
import NewFood from './components/newFood';
import FridgeList from './components/fridgeList';
import FreezerList from './components/freezerList';
import './App.css';

class App extends Component {





  render() {
    return (
      <div>
     
        <NewFood />
        <FridgeList />
        <FreezerList />     
        
      </div>
    );
  }
}

export default App;
