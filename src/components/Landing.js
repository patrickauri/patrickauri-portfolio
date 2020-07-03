import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Landing = () => {
	return (
		<React.Fragment>
			<Container className='text-center my-5'>
				<Row className='my-2'>
					<Col lg>
						<Image width='350px' src={require('../style/img/pato.jpeg')} roundedCircle fluid />
					</Col>
					<Col lg className='my-auto'>
						<img alt='name' className='img-fluid' src={require('../style/img/PatrickAuriName.png')} />
						<div className='my-3' />
						<Titles />
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

const Titles = () => {
	const titleStyle = {
		textAlign: 'left',
		width: '100%',
		color: 'rgb(235, 245, 255)',
		backgroundColor: 'rgb(35,35,35)',
		padding: '0.5em',
		whiteSpace: 'normal',
		wordBreak: 'break-all'
	};
	const funcStyle = {
		color: 'rgb(190, 80, 190)',
		fontStyle: 'italic'
	};
	const objStyle = {
		color: 'rgb(140, 255, 140)'
	};
	const nameStyle = {
		color: 'rgb(130, 170, 255)'
	};
	const bOpen = '{\n';
	const tab = '';
	const bClose = '\n}';

	return (
		<div style={titleStyle}>
			<span style={funcStyle}>const </span> <span style={nameStyle}>me</span> = {bOpen}
			<br />
			{tab}name: <span style={objStyle}>'Patrick Auri'</span>,
			<br />
			{tab}country: <span style={objStyle}>'Norway'</span>,
			<br />
			{tab}titles: [ <span style={objStyle}>'programmer'</span>, <span style={objStyle}>'language teacher'</span>,{' '}
			<span style={objStyle}>'translator'</span>, <span style={objStyle}>'composer'</span> ]
			{bClose};
			<br />
			<span style={funcStyle}>return</span> <span style={nameStyle}>me</span>;
		</div>
	);
};

export default Landing;
