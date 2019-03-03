import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import './fridgeList.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class FridgeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expiredfoods: false,
      filter: '0'   // why is this state not being set from the beginning? And why is mushrooms still on the list?
    };
  }

  notify = () => {
    toast.warn("You have some foods expiring soon! Get cooking!");
    console.log("helloooo");
  }

  expired(x) {
    let userData = null;
    let sixDays = 1000 * 3600 * 24 * 6;
    let nowDate = new Date();
    let nowDateMilli = nowDate.getTime();
    let userDate = new Date(x).getTime();
      if (nowDateMilli > (userDate + sixDays)) {
          if (this.state.expiredfoods === false) {
            this.notify();
            this.state = ({      // This works as .state but not as setState. WHY?  
              expiredfoods: true
            });
          }
        return "expired";
      }
  }


  filterSelection(x) {
    this.setState ({
        filter: x
    })
  }

  render() {
      return (
      
        <div>
          <div><ToastContainer /></div>
          <div className="container">
            <div className="container text-left align-items-left align-content-left">
              <h2>My Fridge List</h2>
              <hr id="hr1" align="left" className="hr-light"></hr>
              <div id="filterBtns">
                  <button className={this.state.filter === '0' ? "filbtn active" : "filbtn"}  onClick= {() => this.filterSelection('0')}>Show all</button>
                  <button className={this.state.filter === '1' ? "filbtn active" : "filbtn"} onClick={() => this.filterSelection('1')}>Vegetables</button>
                  <button className={this.state.filter === '2' ? "filbtn active" : "filbtn"} onClick={() => this.filterSelection('2')}>Fruit</button>
                  <button className={this.state.filter === '3' ? "filbtn active" : "filbtn"} onClick={() => this.filterSelection('3')}>Protein</button>
                  <button className={this.state.filter === '4' ? "filbtn active" : "filbtn"} onClick={() => this.filterSelection('4')}>Meat</button>
                  <button className={this.state.filter === '5' ? "filbtn active" : "filbtn"}  onClick={() => this.filterSelection('5')}>Carbohydrates</button>
                  <button className={this.state.filter === '6' ? "filbtn active" : "filbtn"}  onClick={() => this.filterSelection('6')}>Dessert</button>
                  <button className={this.state.filter === '7' ? "filbtn active" : "filbtn"}  onClick={() => this.filterSelection('7')}>Other</button>
                </div>
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
                      if (this.state.filter === '0') {
                        return <tr key={i}>     
                          {console.log(this.props.fridgeFreezerList)}           
                          <td>{item.name}</td>
                          <td className={this.expired(item.date.split("T")[0])}>{item.date.split("T")[0]}</td>
                          <td>{item.quantity}</td> 
                          <td><button className="btn btn-sm btn-success" onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                          <td><NavLink to={`/recipes/${item.id}`}>Recipes</NavLink></td>
                        </tr> 
                      } if (item.type == this.state.filter) {
                        return <tr key={i}>     
                          {console.log(this.props.fridgeFreezerList)}           
                          <td>{item.name}</td>
                          <td className={this.expired(item.date.split("T")[0])}>{item.date.split("T")[0]}</td>
                          <td>{item.quantity}</td> 
                          <td><button className="btn btn-sm btn-success" onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                          <td><NavLink to={`/recipes/${item.id}`}>Recipes</NavLink></td>
                        </tr> 
                      }
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