import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class UpFood extends React.Component {
	btnUpFood = () => {
		let foods = [...this.props.foods];
		let filterfoods = foods.filter((food) => food._id !== this.props.food._id);

		filterfoods.splice(this.props.index - 1, 0, this.props.food);
		// alert(this.props.index);
		console.log(foods);
		console.log(filterfoods);
		axios.delete('http://localhost:8080/foods').then(() => {
			alert(this.props.food.name + ' is your top ' + this.props.index);
			axios
				.post('http://localhost:8080/foods/ranks', filterfoods)
				.then((res) => {
					// console.log(res.data);
					this.props.upFood(res.data);
				});
		});
	};
	render() {
		return (
			<>
				<Button variant='dark' onClick={this.btnUpFood}>
					Up
				</Button>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		foods: state.foods,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		upFood: (food) => dispatch({ type: 'UP_FOOD', payload: food }), // rank Up
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UpFood);
