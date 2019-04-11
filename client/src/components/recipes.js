import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: '',
			recipes: []
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		fetch(`http://localhost:9000/api/v1/items/${id}`)
			.then((res) => {
				if (!res.ok) {
					throw Error(res.statusText);
				}
				// console.log(res.json());
				return res.json();
			})
			.then((json) => {
				//console.log(json);
				this.setState({
					selectedItem: json
				});
				const itemName = this.state.selectedItem[0].name;
				return fetch(
					`https://api.edamam.com/search?q=${itemName}&app_id=b7adf39b&app_key=a9f94891623ff0ff350e728784994719&from=0&to=12`
				);
			})
			.then((res) => {
				//console.log(res);
				if (!res.ok) {
					throw Error(res.statusText);
				}
				return res.json();
			})
			.then((json) => {
				//console.log(json);
				//console.log(json.hits);
				this.setState({
					recipes: json.hits
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	showRecipe() {}

	render() {
		return (
			<div>
				<div className="container">
					<h3>Click the image to see the recipe!</h3>
				</div>

				<div className="container">
					<div className="row">
						{this.state.recipes.map((item, i) => (
							<div className="col-md-4" key={i}>
								<a href={item.recipe.url}>
									<img className="img-rounded" alt={item.recipe.label} src={item.recipe.image} />
								</a>
								<p>{item.recipe.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Recipes;
