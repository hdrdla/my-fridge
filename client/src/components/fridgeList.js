import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class FridgeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  


    render() {
      return (
        <div>
          <h2>My Fridge List</h2>
          
          <div className="container"> 
            <table className="table table-striped table-bordered table-hover">
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
                this.props.fridgeFreezerList
                .filter(item => item.fridge === 1)
                .map((item, i) =>                
                    <tr key={i}>                
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.quantity}</td> 
                      <td><button onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                    </tr>                  
                 )
                }

{/* when do i need{}???? 
this.props.fridgeFreezerList
                .filter(item => item.fridge === 1)
                .map((item, i) => {                
                    return <tr key={i}>                
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td> 
                            <td><button onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                          </tr>
                  }
                 ) */} 
                </tbody>
            </table>
          </div>

        </div>
      )
    }
  };


export default FridgeList;