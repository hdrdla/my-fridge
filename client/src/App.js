import React, { Component } from 'react';
import NewFood from './components/newFood';
import FridgeList from './components/fridgeList';
import './App.css';
import FreezerList from './components/freezerList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fridgeView: true,
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

  changeList(e) {
    this.setState ({
      fridgeView: e
    });
  }


  render() {
    return (
      <div>
        <div>
          <NewFood addItem={this.addItem}/>
        </div>

        <div>
          <div>
            <button onClick={() => this.changeList(true)}>Fridge</button>
            <button onClick={() => this.changeList(false)}>Fridge</button>
          </div> 
          <div>
            <FridgeList fridgeFreezerList={this.state.fridgeFreezerList}/> 
            <FreezerList fridgeFreezerList={this.state.fridgeFreezerList}/>  
          </div>
        </div>
     </div>
    );
  }
}

export default App;
