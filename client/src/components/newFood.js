import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NewFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          fridge: 1,
          date: '',
          quantity: 0
        };
      }
    
    handleChange(e) {
        e.preventDefault();
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    updateFridge(e) {
        this.setState ({
            fridge: e.target.value
        });
    }

    handleClick() {
        let newItem = {
            name: this.state.name,
            fridge: this.state.fridge,
            date: this.state.date,
            quantity: this.state.quantity
        }
        this.props.addItem(newItem);
 
    }





    render() {
      return (
        <div>
            <div className="jumbotron text-center">
                <div className="container">
                    <h1>My Fridge</h1>
                    <p>Update your fridge item and prevent from food waste!</p>
                </div>
                <div className="container">
                    <form className="form-inline">
                        <div className="form-group">
                            <label>Food</label>
                            <input className="form-control" name="name" onChange = { e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <input className="form-control" name="date" placeholder="YYYY-MM-DD" onChange = { e => this.handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input className="form-control" name="quantity" onChange = { e => this.handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <select value={this.state.fridge} onChange = { e => this.updateFridge(e)}>
                                <option value={1}>Fridge</option>
                                <option value={0}>Freezer</option>
                            </select>
                        </div>     
                    </form>
                    <button className="btn btn-primary" onClick = { () => this.handleClick()}>Submit</button>
                </div> 
            </div>
        </div>
      );
    }
  }

export default NewFood;



