import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NewFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
          food: '',
          date: '',
          quantity: 0,
          fridge: 1,
          fridgeFreezerList: []
        };
      }

    
    
    updateFood(e) {
        e.preventDefault();
        this.setState ({
            food: e.target.value
        });
    }

    updateFridge(e) {
        this.setState ({
            fridge: e.targe.value
        })
    }

    updateDate(e) {
        e.preventDefault();
        this.setState ({
            date: e.target.value
        });
    }

    addItem(e) {
        e.preventDefault();

        let newItem = {
            food: this.state.food,
            date: this.state.date,
            quantity: this.state.quantity,
            fridge: this.state.fridge
        }
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





    render() {
      return (
        <div>
            <div class="jumbotron text-center">
                <div class="container">
                    <h1>My Fridge</h1>
                    <p>Update your fridge item and prevent from food waste!</p>
                </div>
                <div class="container">
                    <form class="form-inline">
                        <div class="form-group">
                            <lable>Food</lable>
                            <input class="form-control" onChange = { e => this.updateFood(e)} />
                        </div>
                        <div class="form-group">
                            <lable>Date</lable>
                            <input class="form-control" placeholder="YYYY-MM-DD" onChange = { e => this.updateDate(e)}/>
                        </div>
                        <div class="form-group">
                            <lable>Quantity</lable>
                            <input class="form-control" onChange = { e => this.updateQuantity(e)}/>
                        </div>
                        <div class="form-group">
                            <lable>Where</lable>
                            <select onChange = { e => this.updateFridge(e)}>
                                <option value="1">Fridge</option>
                                <option value="2">Freezer</option>
                            </select>
                        </div>     
                    </form>
                    <button class="btn btn-primary" onClick = { e => this.addItem(e)}>Submit</button>
                </div> 
            </div>
        </div>
      );
    }
  }

export default NewFood;



