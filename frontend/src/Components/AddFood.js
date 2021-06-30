import React from 'react';
import {
	Form,
	Col,
	Container,
	Row,
	Button,
	ShowForm,
	Offcanvas,
} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

class AddFood extends React.Component {
	state = {
		name: '',
		description: '',
		image: '',
	};
	btnAddFood = () => {
		let newFood = {
			isDelete: true,
			name: this.state.name,
			description: this.state.description,
			image: this.state.image,
		};

		axios.post('http://localhost:8080/foods', newFood).then((res) => {
			this.props.addFood(res.data); //pass to mapDispatchToProps
		});
		this.setState({
			name: '',
			description: '',
			image: '',
		});
	};

	render() {
		return (
			<>
				<Container className='bg-light'>
					<Form.Group className='p-2'>
						<Form.Row>
							<Form.Label column='sm' lg={12}>
								Name
							</Form.Label>
							<Col>
								<Form.Control
									size='sm'
									type='text'
									placeholder='Name'
									value={this.state.name}
									onChange={(e) => this.setState({ name: e.target.value })}
								/>
							</Col>
						</Form.Row>
						<Form.Row>
							<Form.Label column='sm' lg={12}>
								Description
							</Form.Label>
							<Col>
								<Form.Control
									as='textarea'
									rows={3}
									value={this.state.description}
									onChange={(e) =>
										this.setState({ description: e.target.value })
									}
								/>
							</Col>
						</Form.Row>
						<Form.Row>
							<Form.Label column='sm' lg={12}>
								Image Link
							</Form.Label>
							<Col>
								<Form.Control
									size='sm'
									type='text'
									placeholder='Image'
									value={this.state.image}
									onChange={(e) => this.setState({ image: e.target.value })}
								/>
							</Col>
						</Form.Row>
						<Form.Row className='mt-2'>
							<Col>
								<Button
									className='float-right'
									variant='primary'
									onClick={this.btnAddFood}
								>
									Save
								</Button>{' '}
							</Col>
						</Form.Row>
					</Form.Group>
				</Container>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		getfoodRank: state.foods.length, // to get the l;ength for the ranks
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFood: (food) => dispatch({ type: 'ADD_FOOD', payload: food }), //save to reducer
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
