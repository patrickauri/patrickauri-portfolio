import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

/* <Link to='/blog/'>
	<Button className='mx-1' size='lg' variant='success'>
		See Blog
	</Button>
</Link> */

const Landing = () => {
	return (
		<React.Fragment>
			<Jumbotron className='text-center'>
				<img alt='name' className='img-fluid' src={require('../style/img/PatrickAuriName.png')} />
				<br />
				<i className='text-white py-2'>Composer - Voice Actor - Polyglot - Programmer</i>
				<hr className='my-5' />
				<Container>
					<Row className='my-1'>
						<Col>
							<Link to='/contact/'>
								<Button className='mx-1' size='lg' variant='primary'>
									Contact
								</Button>
							</Link>
						</Col>
					</Row>
					<Row className='my-5'>
						<Col>
							<div
								className='g-ytsubscribe'
								data-channelid='UCRqk7Lv6elxXBnrJWKHn8xw'
								data-layout='full'
								data-theme='dark'
								data-count='hidden'
							/>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</React.Fragment>
	);
};

export default Landing;
