import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './newFood.css';

class NewFood extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			type: 'select',
			fridge: 'select',
			date: '',
			quantity: 0
		};
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleClick() {
		let newItem = {
			name: this.state.name,
			type: this.state.type,
			fridge: this.state.fridge,
			date: this.state.date,
			quantity: this.state.quantity
		};
		this.props.addItem(newItem);
	}

	render() {
		return (
			<div>
				<div id="jumbo" className="jumbotron">
					<div className="container white-text text-center align-items-center align-content-center">
						<h1 className="text-uppercase mb-0 pt-md-5 pt-5" id="label">
							My Fridge
						</h1>
						<hr id="hr" className="hr-light my-4" />
						<p id="p">Update your fridge items and prevent food waste!</p>
					</div>
					<div className="container">
						<form id="form" className="form-group form-row">
							<div className="form-group col-xs-3 col-md-3">
								<label className="control-label" id="label">
									Food
								</label>
								<input className="form-control" name="name" onChange={(e) => this.handleChange(e)} />
							</div>
							<div className="form-group col-xs-2 col-md-2">
								<label className="control-label" id="label">
									Date
								</label>
								<input
									className="form-control"
									name="date"
									placeholder="YYYY-MM-DD"
									onChange={(e) => this.handleChange(e)}
								/>
							</div>
							<div className="form-group col-xs-2 col-md-2">
								<label className="control-label" id="label">
									Quantity
								</label>
								<input
									className="form-control"
									name="quantity"
									onChange={(e) => this.handleChange(e)}
								/>
							</div>
							{/*<div className="form-group dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select
                            </button>
                            <div value={this.state.fridge} onChange = { e => this.updateFridge(e)} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a value={1} className="dropdown-item" href="#">Fridge</a>
                                <a value={0} className="dropdown-item" href="#">Freezer</a>
                            </div>
                        </div>*/}
							<div className="form-group col-xs-2 col-md-2">
								<select
									id="select1"
									className="form-control"
									name="fridge"
									onChange={(e) => this.handleChange(e)}
								>
									<option value={'select'}>Storage</option>
									<option value={1}>Fridge</option>
									<option value={0}>Freezer</option>
								</select>
							</div>
							<div className="form-group col-xs-3 col-md-3">
								<select
									id="select2"
									className="form-control"
									name="type"
									onChange={(e) => this.handleChange(e)}
								>
									<option value={'select'}>Type</option>
									<option value={1}>Vegetable</option>
									<option value={2}>Fruit</option>
									<option value={3}>Protein</option>
									<option value={4}>Meat</option>
									<option value={5}>Carbohydrate</option>
									<option value={6}>Dessert</option>
									<option value={7}>Other</option>
								</select>
							</div>
						</form>
						<div className="form-group text-center align-items-center align-content-center">
							<button className="btn btn-primary" onClick={() => this.handleClick()}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewFood;
