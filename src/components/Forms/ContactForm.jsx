import React from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

const ContactForm = () => {
	return (
		<Form>
			<Form.Group controlId="formGroupName">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" />
			</Form.Group>
			<Form.Group controlId="formGroupEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" />
			</Form.Group>
			<Form.Label>Website</Form.Label>
			<InputGroup className="mb-2">
				<InputGroup.Prepend>
					<InputGroup.Text>https://</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl id="inlineFormInputGroup" />
			</InputGroup>
			<Form.Group controllId="formGroupTextarea">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows={6} />
			</Form.Group>
			<Form.Group>
				<Form.Check
					custom
					id="agreement"
					type="checkbox"
					required
					label="Allow us to sell your personal details to whomever we want"
					feedback="You must agree before submitting."
				/>
			</Form.Group>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default ContactForm;
