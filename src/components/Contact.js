import React from 'react';
import { Row, Col, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';

const Contact = () => {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<Jumbotron className='text-center'>
						<img className='img-fluid mb-5' src={require('../style/img/PatrickAuriName.png')} />
						<Card className='mx-auto' style={{ width: '18rem' }}>
							<Card.Header>
								<h4>Contact Details</h4>
							</Card.Header>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<a target='_blank' href='mailto:patrickauri@gmail.com'>
										<Button size='lg' block>
											Email
										</Button>
									</a>
								</ListGroup.Item>
								<ListGroup.Item>
									<a target='_blank' href='tel:+4792422401'>
										<Button size='lg' block>
											Phone
										</Button>
									</a>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Jumbotron>
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default Contact;
