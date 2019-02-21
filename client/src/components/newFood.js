import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NewFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
          food: '',
          fridge: '',
          date: '',
          quantity: 0
        };
      }
    
    
    handleChange(e) {
        e.preventDefault();
        this.setState ({
            [e.targe.name]: e.target.value
        });
        console.log(this.state.food);
    }

    updateFridge(e) {
        this.setState ({
            fridge: e.targe.value
        });
    }


    

    handleClick() {
        let newItem = {
            food: this.state.food,
            fridge: this.state.fridge,
            date: this.state.date,
            quantity: this.state.quantity
        }
        this.props.addItem(newItem)
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
                            <lable>Food</lable>
                            <input className="form-control" name="food" onChange = { e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <lable>Date</lable>
                            <input className="form-control" name="date" placeholder="YYYY-MM-DD" onChange = { e => this.handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <lable>Quantity</lable>
                            <input className="form-control" name="quantity" onChange = { e => this.handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <select value={this.state.fridge} onChange = { e => this.updateFridge(e)}>
                                <option value="fridge">Fridge</option>
                                <option value="freezer">Freezer</option>
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



