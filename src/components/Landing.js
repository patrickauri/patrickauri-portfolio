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
		wordBreak: 'break-all',
		borderBottomLeftRadius: '0.5em',
		borderBottomRightRadius: '0.5em'
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
	const hiddenStyle = {
		color: 'rgba(0,0,0,0)'
	};

	const spacingStyle = {
		width: '2em',
		height: '100%'
	};
	const containerStyle = {
		display: 'flex'
	};
	const topStyle = {
		backgroundColor: 'rgb(200,200,200)',
		height: '2em',
		borderTopLeftRadius: '0.5em',
		borderTopRightRadius: '0.5em'
	};

	const bOpen = '{\n';
	const tab = <span style={hiddenStyle}>XXXX</span>;
	const bClose = '\n}';

	return (
		<div id='console'>
			<div id='console-top' style={topStyle}>
				me.js - bash - 80x10
			</div>
			<div id='console-text' style={titleStyle}>
				<span style={funcStyle}>const </span> <span style={nameStyle}>me</span> = {bOpen}
				<br />
				<div id='code-container' style={containerStyle}>
					<div style={spacingStyle} id='code-spacing' />
					<div id='code'>
						name: <span style={objStyle}>'Patrick Auri'</span>,
						<br />
						country: <span style={objStyle}>'Norway'</span>,
						<br />
						titles: [ <span style={objStyle}>'programmer'</span>,<br />
						<span style={objStyle}>'language teacher'</span>,<br />{' '}
						<span style={objStyle}>'translator'</span>,<br />
						<span style={objStyle}>'composer'</span> ]
					</div>
				</div>
				{bClose};
				<br />
				<span style={funcStyle}>return</span> <span style={nameStyle}>me</span>;
			</div>
		</div>
	);
};

export default Landing;
