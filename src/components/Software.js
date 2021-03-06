import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';

const Software = () => {
	const projects = [
		{
			title: 'SubJapanBot',
			desc: 'Discord Bot programmed in Python for the SubJapan (intercultural exchange) server',
			img: 'https://discord.com/assets/f7a4131e47f50b48b3f85f73c47ff1dc.png',
			link: 'https://github.com/patrickauri/SubJapanBot',
			btn: 'Github',
			tags: 'Python - Discord API',
		},
		{
			title: 'Jisho.no',
			desc: 'Frontend Web Design for Jisho.no (Norwegian-Japanese Dictionary)',
			img: require('../style/img/jisho_logo_1_white.png'),
			link: 'https://github.com/jishono/japansk-norsk',
			btn: 'Github',
			tags: 'PHP - SQL - Javascript - Bootstrap',
		},
		{
			title: 'Patrick Auri Website',
			desc: 'React.JS Frontend & Web design',
			img: require('../style/img/panet.jpeg'),
			link: 'https://github.com/patrickauri/patrickauri-portfolio',
			btn: 'Github',
			tags: 'Javascript - React.JS - CSS - Bootstrap',
		},
	];

	return (
		<React.Fragment>
			<Row>
				<Col>
					<Jumbotron className='text-white text-center'>
						<h1>Software</h1>
						<hr />
						<Link to='/contact/' className=''>
							<Button>Contact for Software Projects</Button>
						</Link>
					</Jumbotron>
				</Col>
			</Row>
			<Row>
				{projects.map((project) => (
					<Col md>
						<SoftwareCard
							title={project.title}
							desc={project.desc}
							img={project.img}
							link={project.link}
							btn={project.btn}
							tags={project.tags}
						/>
					</Col>
				))}
			</Row>
		</React.Fragment>
	);
};

const SoftwareCard = (props) => {
	return (
		<Card className='mx-auto my-2 card-software' style={{ width: '100%', height: '500px' }}>
			<Card.Img variant='top' src={props.img} />
			<Card.Body>
				<Card.Title>{props.title || 'Title'}</Card.Title>
				<Card.Text>{props.desc || 'Description'}</Card.Text>
				<a href={props.link || '#'} target='_blank' rel='noopener noreferrer'>
					<Button variant='primary'>{props.btn || 'Button'}</Button>
				</a>
			</Card.Body>
			<Card.Footer className='text-muted'>{props.tags}</Card.Footer>
		</Card>
	);
};

export default Software;
