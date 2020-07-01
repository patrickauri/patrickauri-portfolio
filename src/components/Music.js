import React from 'react';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Music = () => {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<Jumbotron className='text-white text-center'>
						<h1>Music</h1>
						<hr />
						<Link to='/contact/' className=''>
							<Button>Contact for Composition/Performance</Button>
						</Link>
					</Jumbotron>
				</Col>
			</Row>
			<Row className='justify-content-md-center text-center text-white'>
				<Col md>
					<SoundCloud src='327944667' />
				</Col>
				<Col md>
					<SoundCloud src='327928340' />
				</Col>
				<Col md>
					<SoundCloud src='327926067' />
				</Col>
			</Row>
		</React.Fragment>
	);
};

const SoundCloud = (props) => {
	const src =
		'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/' +
		props.src +
		'&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
	return (
		<React.Fragment>
			<iframe
				title={props.title}
				width='100%'
				height='300'
				scrolling='no'
				frameborder='no'
				allow='autoplay'
				src={src}
			></iframe>
		</React.Fragment>
	);
};

export default Music;
