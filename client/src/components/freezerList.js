import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import './freezerList.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FreezerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

      notify = () => toast.info("Did you forget about something in your freezer?");

      expired(x) {
        let userData = null;
        let threeMonths = 1000 * 3600 * 24 * 3 * 7;;
        let nowDate = new Date();
        let nowDateMilli = nowDate.getTime();
        let userDate = new Date(x).getTime();
          if (nowDateMilli > (userDate + threeMonths)) {
            this.notify();
            return "expired";
          }
      }

// i think you need to set a new state within this component.
// the render() gets called the first time the component loads
// or whenever the state of a particular component changes

// so if you use a react lifecycle method (componentDidUpdate?) you could
// watch for the props of a component changing and if so, you can update
// the state to be the value of what the props are

// this will re-run the render() function and you'll see the new item(s) 
// added
    
    render() {
          return (
            <div>
              <div><ToastContainer /></div>  
              <div  id="all" className="container">
                <div className="container">
                  <h2>My Freezer List</h2>
                  <hr id="hr2" align="left" className="hr-light"></hr>
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
                    {
                      this.props.fridgeFreezerList.map((item, i) => { 
                          if (item.fridge == 0) {              
                              return <tr key={i}>                
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
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )
        }


  



}


export default FreezerList;