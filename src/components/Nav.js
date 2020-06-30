import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

{
	/* <Link to='/blog/' className='nav-link'>
	Blog
</Link> */
}

const Navigation = () => {
	return (
		<Navbar bg='purple' expand='md' className='navbar-dark bg-dark'>
			<Link to='/home/' className='navbar-brand align-middle'>
				Patrick Auri
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Link to='/home/' className='nav-link'>
						Home
					</Link>
					<Link to='/software/' className='nav-link'>
						Software
					</Link>
					<Link to='/music/' className='nav-link'>
						Music
					</Link>
					<Link to='/translation/' className='nav-link'>
						Translation
					</Link>

					<Link to='/contact/' className=''>
						<Button style={{ height: '100%' }} className='btn-sm my-auto'>
							Contact
						</Button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
