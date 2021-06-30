import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddFood from './Components/AddFood';
import Foods from './Components/Foods';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:8080/foods').then((res) => {
			this.props.setFoods(res.data);
			// console.log(res.data);
		});
	}
	render() {
		return (
			<>
				<Container fluid className='p-2'>
					<Row>
						<Col sm={4}>
							<AddFood />
						</Col>
						<Col sm={8}>
							<Foods />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		//
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFoods: (foods) => dispatch({ type: 'SET_FOODS', payload: foods }),
	};
};

export default connect(null, mapDispatchToProps)(App);
