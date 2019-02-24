import React, { Component } from 'react';
import NewFood from './components/newFood';
import FridgeList from './components/fridgeList';
import './App.css';
import FreezerList from './components/freezerList';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



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
        this.setState ({
          fridgeFreezerList: json
        });
      })
      .catch(error => {
        console.log(error)
      })
  }

  addItem(newItem) {
    console.log(newItem);
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
        const currentList = this.state.fridgeFreezerList;
        this.setState ({
            fridgeFreezerList: [...currentList, newItem]
        });
        console.log(this.state.fridgeFreezerList)
    })
    .catch (error => console.log(error))
  }

  removeItem(event, i) {
    event.preventDefault();
    fetch(`http://localhost:9000/api/v1/items/${this.state.fridgeFreezerList[i].id}`, {
      method: "DELETE",
      headers: {
              "Content-Type": "application/json",
      },
    })
    .then (res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        let arr = this.state.fridgeFreezerList;
        arr.splice(i, 1)
        this.setState ({
            fridgeFreezerList: arr
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
          <NewFood addItem={(item) => this.addItem(item)}/>
        </div>

        <div>
          <div className="container text-right">
            <button className={this.state.fridgeView === true ? "btn btn-primary btn-sm" : "btn btn-info btn-sm"} onClick={() => this.changeList(true)}>Fridge</button>
            <button className={this.state.fridgeView ? "btn btn-info btn-sm" : "btn btn-primary btn-sm"} onClick={() => this.changeList(false)}>Freezer</button>
          </div> 
          <div>
            {this.state.fridgeView ? <FridgeList fridgeFreezerList={this.state.fridgeFreezerList} removeItem={(event, i) => this.removeItem(event, i)}/>
              : <FreezerList fridgeFreezerList={this.state.fridgeFreezerList} removeItem={(event, i) => this.removeItem(event, i)}/>
            }
             
             
          </div>
        </div>
     </div>
    );
  }
}

export default App;
