import React, { Component } from 'react';
import NewFood from './components/newFood';
import FridgeFreezerList from './components/fridgeFreezerList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fridgeFreezerList: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/v1/items') 
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(json => {
        console.log(json); 
        this.setState ({
          fridgeFreezerList: json
        });
      })
      .catch(error => {
        console.log(error)
      })
  }

  addItem(newItem) {
    //newItem.preventDefault();
    fetch('http://localhost:9000/api/v1/items', {
        method: "POST", 
        headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem) 
    })
    .then (res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        this.setState ({
            fridgeFreezerList: [...this.state.fridgeFreezerList, newItem]
        });
    })
    .catch (error => console.log(error))
  }



  render() {
    return (
      <div>
     
        <NewFood addItem={this.addItem}/>
        <FridgeFreezerList fridgeFreezerList={this.state.fridgeFreezerList}/>   
        
      </div>
    );
  }
}

export default App;
