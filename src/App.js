import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navigation from './components/Nav';
import Blog from './components/Blog';
import Music from './components/Music';
import Software from './components/Software';
import Translation from './components/Translation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style/main.css';

function App() {
	return (
		<Router>
			<Navigation />
			<Container fluid className=''>
				<Switch>
					<Route path='/software'>
						<Software />
					</Route>
					<Route path='/translation'>
						<Translation />
					</Route>
					<Route path='/music'>
						<Music />
					</Route>
					<Route path='/blog'>
						<Blog />
					</Route>
					<Route path='/home'>
						<Landing />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/'>
						<Landing />
					</Route>
				</Switch>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
