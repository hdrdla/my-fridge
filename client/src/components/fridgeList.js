import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import './fridgeList.css';


class FridgeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getDate() {
    let nowDate = new Date();
    let nowDateMilli = nowDate.getTime();
    return nowDateMilli;
  }

  dateMilli (x) {
    let userDate = new Date(x).getTime();
    return userDate;
  }

    render() {
      let sixDays = 1000 * 3600 * 24 * 6;

      return (
      
        <div>
          <div className="container">
            <div className="container text-left align-items-left align-content-left">
              <h2>My Fridge List</h2>
              <hr id="hr1" align="left" className="hr-light"></hr>
            </div>
            
            
            <div className="container"> 
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Remove Items</th>
                    <th>Get Recipes</th>
                  </tr>
                </thead>
                <tbody>

              { /* the newest item being added
              // always has the fridge boolean as a string
              // and then in your render function 
              // you are checking for only items that have
              // if (item.fridge === 1) */ }
              

                {
                  this.props.fridgeFreezerList.map((item, i) => {
                    if (item.fridge == 1) {
                      return <tr key={i}>     
                      {console.log(this.props.fridgeFreezerList)}           
                        <td>{item.name}</td>
                        <td className={(this.getDate() > (this.dateMilli(item.date.split("T")[0]) + sixDays) ? 'expired' : null)}>{item.date.split("T")[0]}</td>
                        <td>{item.quantity}</td> 
                        <td><button className="btn btn-sm btn-success" onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                        <td><NavLink to={`/recipes/${item.id}`}>Recipes</NavLink></td>
                      </tr> 
                      }
                      return <tr key={i}></tr>;
                    }               
                  )}

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
        </div>
      )
    }
  };


export default FridgeList;