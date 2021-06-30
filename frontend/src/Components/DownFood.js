import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class DownFood extends React.Component {
	btnDownFood = () => {
		let foods = [...this.props.foods];
		let filterfoods = foods.filter((food) => food._id !== this.props.food._id);

		filterfoods.splice(this.props.index + 1, 0, this.props.food);
		// alert(this.props.index);
		console.log(foods);
		console.log(filterfoods);
		axios.delete('http://localhost:8080/foods').then(() => {
			alert(this.props.food.name + ' is your top ' + (this.props.index + 2));
			axios
				.post('http://localhost:8080/foods/ranks', filterfoods)
				.then((res) => {
					// console.log(res.data);
					this.props.DownFood(res.data);
				});
		});
	};
	render() {
		return (
			<>
				<Button variant='dark' className='m-1' onClick={this.btnDownFood}>
					Down
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
		DownFood: (food) => dispatch({ type: 'DOWN_FOOD', payload: food }), // rank Up
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DownFood);
