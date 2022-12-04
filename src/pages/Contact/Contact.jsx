import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import  ContactInfo  from './ContactInfo/ContactInfo';
import { ContactForm } from '../../components';

const Contact = () => {
	return (
		<Container className="contactContainer">
			<Row>
				<Col
					className="contactForm"
					xs={{ span: 12, order: 2 }}
					md={{ span: 5, order: 1 }}
				>
					<h2>Submit your details</h2>
					<ContactForm />
				</Col>
				<Col
					className="contactInfo"
					xs={{ span: 12, order: 1 }}
					md={{ span: 5, order: 2 }}
				>
					<ContactInfo />
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
