import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Landing = () => {
	return (
		<React.Fragment>
			<Container className='text-center my-5'>
				<Row className='my-2'>
					<Col md>
						<Image width='350px' src={require('../style/img/pato.jpeg')} roundedCircle />
					</Col>
					<Col md className='my-auto'>
						<img alt='name' className='img-fluid' src={require('../style/img/PatrickAuriName.png')} />
						<div className='my-3' />
						<i className='text-white py-2'>Programmer - Composer - Voice Actor - Polyglot</i>
						<div className='my-3' />
						<Link to='/contact/'>
							<Button className='mx-1' size='lg' variant='primary'>
								Contact
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default Landing;
