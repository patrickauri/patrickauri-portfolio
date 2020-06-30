import React from 'react';
import { Container, Badge, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<Container fluid className='text-center text-white'>
			<Row>
				<Col>
					<a target='blank' href='https://www.facebook.com/patrickauriofficial/' className='fa fa-facebook' />
					<a target='blank' href='https://twitter.com/PatrickAuri' className='fa fa-twitter' />
					<a target='blank' href='https://www.linkedin.com/in/patrickauri/' className='fa fa-linkedin' />
					<a
						target='blank'
						href='https://www.youtube.com/channel/UCRqk7Lv6elxXBnrJWKHn8xw'
						className='fa fa-youtube'
					/>
					<a target='blank' href='https://www.instagram.com/patrickauri/' className='fa fa-instagram' />
					<a target='blank' href='https://github.com/patrickauri' className='fa fa-github' />
				</Col>
			</Row>
			<i>© Patrick Auri 2020</i>
			<div className='my-2' />
		</Container>
	);
};

export default Footer;
