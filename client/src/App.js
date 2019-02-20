import React, { Component } from 'react';
import NewFood from './components/newFood';
import FridgeFreezerList from './components/fridgeFreezerList';
import './App.css';

class App extends Component {





  render() {
    return (
      <div>
     
        <NewFood />
        <FridgeFreezerList />   
        
      </div>
    );
  }
}

export default App;
