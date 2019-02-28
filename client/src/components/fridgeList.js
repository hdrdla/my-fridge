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
      expiredfoods: false
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
    console.log(x);
  }

    render() {
      return (
      
        <div>
          <div><ToastContainer /></div>
          <div className="container">
            <div className="container text-left align-items-left align-content-left">
              <h2>My Fridge List</h2>
              <hr id="hr1" align="left" className="hr-light"></hr>
                <div id="Filter">
                  <button className="filbtn active" onClick= {() => this.filterSelection('all')}>Show all</button>
                  <button className="filbtn" onClick={() => this.filterSelection('6')}>Fruits</button>
                  <button className="filbtn" onClick={() => this.filterSelection('5')}>Vegetables</button>
                  <button className="filbtn" onClick={() => this.filterSelection('4')}>Protein</button>
                  <button className="filbtn" onClick={() => this.filterSelection('3')}>Meat</button>
                  <button className="filbtn" onClick={() => this.filterSelection('2')}>Carbohydrates</button>
                  <button className="filbtn" onClick={() => this.filterSelection('1')}>Dessert</button>
                  <button className="filbtn" onClick={() => this.filterSelection('0')}>Other</button>
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
                      return <tr key={i} className =  {item.type}>     
                      {console.log(this.props.fridgeFreezerList)}           
                        <td>{item.name}</td>
                        <td className={this.expired(item.date.split("T")[0])}>{item.date.split("T")[0]}</td>
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