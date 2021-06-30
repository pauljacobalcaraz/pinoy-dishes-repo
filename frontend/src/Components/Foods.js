import { connect } from 'react-redux';
import React from 'react';
import { Container, Col, Card, Row, Image } from 'react-bootstrap';
import UpFood from './UpFood';
import DownFood from './DownFood';

class Foods extends React.Component {
	render() {
		return (
			<>
				<Container className='py-2'>
					{this.props.foods.length > 0
						? this.props.foods.map((food, index) => {
								return (
									<Container key={food._id} className='mt-2 bg-light p-3'>
										<Row>
											<Col xs={12} md={4}>
												<img className='col-12 mb-2' src={food.image} />
											</Col>
											<Col className='d-flex'>
												<Card className='col-12'>
													<Card.Body className='d-flex flex-column justify-content-between'>
														<Card.Title className='d-flex justify-content-between'>
															{food.name}
															<p className='d-inline circle p-0'>
																{index + 1 === 1 ? (
																	<span className='material-icons text-dark p-0 m-0 rounded-circle'>
																		emoji_events
																	</span>
																) : (
																	<span>
																		{index + 1 <= 3 ? (
																			<span className='material-icons'>
																				turned_in
																			</span>
																		) : (
																			''
																		)}
																	</span>
																)}
																{index + 1}
															</p>
														</Card.Title>
														<Card.Text>{food.description}</Card.Text>
														<div className='container-fluid p-0 align-self-end'>
															{/* for btn upFood */}
															{index === 0 ? (
																<DownFood food={food} index={index} />
															) : (
																<>
																	{index + 1 === this.props.foods.length ? (
																		<UpFood food={food} index={index} />
																	) : (
																		<>
																			<UpFood food={food} index={index} />
																			<DownFood food={food} index={index} />
																		</>
																	)}
																</>
															)}
														</div>
													</Card.Body>
												</Card>
											</Col>
										</Row>
									</Container>
								);
						  })
						: ''}
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		foods: state.foods,
	};
};

export default connect(mapStateToProps)(Foods);
