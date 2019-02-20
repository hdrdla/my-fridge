import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class FridgeFreezerList extends Component {

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

  removeItems() {

  }



    render() {
      return (
        <div>
          <h2>My Fridge List</h2>
          
          <div class="container"> 
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Remove Items</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.fridgeFreezerList
                .filter(item => item.fridge === 1)
                .map((item, i) => {                
                    return <tr key = {i}>                 {/*WHY RETURN?????!!!!!*/}
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td> 
                            <td><button onClink = {(event) => this.removeItem(event, i)}>Remove</button></td>     
                          </tr>
                  }
                 )
                }
                </tbody>
            </table>
          </div>

          <div>
            <h2>My Freezer List</h2>
          </div>

        </div>
      )
    }
  };

export default FridgeFreezerList;