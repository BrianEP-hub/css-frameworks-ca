import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Home, News, Contact } from '../../pages';

const Navigation = () => {
	return (
		<Router>
			<div>
				<Navbar expand="lg">
					<Navbar.Brand href="/" className="nav-header">
						The YAY company
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<NavLink exact to="/" className="nav-link">
								Home
							</NavLink>
							<NavLink to="/news" className="nav-link">
								News
							</NavLink>
							<NavLink to="/contact" className="nav-link">
								Contact
							</NavLink>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Go</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<hr />
				<Routes>
					<Route exact path="/" element={<Home />} />

					<Route path="/news" element={<News />} />

					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
};

export default Navigation;
