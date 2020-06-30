import React from 'react';
import { Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Vimeo } from './Video';

const Translation = () => {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<Jumbotron className='text-white text-center'>
						<h1>Translation</h1>
						<p className='text-faded'>Japanese - English - Norwegian</p>
						<hr />
						<Link to='/contact/' className=''>
							<Button>Contact for Translation</Button>
						</Link>
					</Jumbotron>
				</Col>
			</Row>
			<Row className='justify-content-md-center'>
				<Col md>
					<TranslationCard
						title='The Gypsy Gentleman Episode 08'
						desc='Japanese Transcription & English Subtitles'
						type='vimeo'
						src='https://player.vimeo.com/video/243084334'
						tags='Japanese'
					/>
				</Col>
			</Row>
		</React.Fragment>
	);
};

const TranslationCard = (props) => {
	const CardImage = () => {
		switch (props.type) {
			case 'vimeo':
				return <Vimeo src={props.src} />;
			case 'youtube':
				return <div>YouTube</div>;
			case 'img':
				return;
			default:
				return 'No Type Specified';
		}
	};

	return (
		<Card className='mx-auto my-2 card-software' style={{ width: '100%' }}>
			<div className=''>{CardImage()}</div>
			<Card.Body>
				<Card.Title>{props.title || 'Title'}</Card.Title>
				<Card.Text>{props.desc || 'Description'}</Card.Text>
				<a href={props.link || '#'} target='_blank'>
					<Button variant='primary'>{props.btn || 'Button'}</Button>
				</a>
			</Card.Body>
			<Card.Footer className='text-muted'>{props.tags}</Card.Footer>
		</Card>
	);
};

export default Translation;
