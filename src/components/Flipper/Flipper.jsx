import React from 'react';
import { Tab, Tabs, Button, Accordion, Card } from 'react-bootstrap';

const Flipper = () => {
	return (
		<>
			<Accordion defaultActiveKey="0" className="d-md-none">
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="0">
							First
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card>
							<Card.Body>
								<p>
									Morbi eget efficitur turpis. Vivamus pellentesque tortor
									massa, venenatis pharetra leo laoreet a. Nullam non eleifend
									justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
									maximus. Sed condimentum mattis rhoncus.
								</p>
								<img src="./img/tab/tab-1.jpg" alt="fist" />
								<p className="socialMedia--accordion">
									SHARE <i class="fab fa-facebook-f"></i>{' '}
									<i class="fab fa-twitter"></i>
								</p>
							</Card.Body>
						</Card>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="1">
							Second
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<div>
							<p>
								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
								venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
								Sed condimentum mattis rhoncus.
							</p>
							<img src="./img/tab/tab-2.jpg" alt="second" />
							<p className="socialMedia--accordion">
								SHARE <i class="fab fa-facebook-f"></i>{' '}
								<i class="fab fa-twitter"></i>
							</p>
						</div>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="2">
							Third
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="2">
						<div>
							<p>
								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
								venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
								Sed condimentum mattis rhoncus.
							</p>
							<img src="./img/tab/tab-3.jpg" alt="third" />
							<p className="socialMedia--accordion">
								SHARE <i class="fab fa-facebook-f"></i>{' '}
								<i class="fab fa-twitter"></i>
							</p>
						</div>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<div className="d-none d-md-block">
				<Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
					<Tab eventKey="one" title="First">
						<Card>
							<Card.Img
								width={64}
								height={64}
								className="mr-3"
								src="./img/tab/tab-1.jpg"
								alt="First"
							/>
							<Card.Body>
								<p>
									Morbi eget efficitur turpis. Vivamus pellentesque tortor
									massa, venenatis pharetra leo laoreet a. Nullam non eleifend
									justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
									maximus. Sed condimentum mattis rhoncus.
								</p>
								<p className="socialMedia--tab">
									SHARE <i class="fab fa-facebook-f"></i>{' '}
									<i class="fab fa-twitter"></i>
								</p>
							</Card.Body>
						</Card>
					</Tab>
					<Tab eventKey="two" title="Second">
						<Card>
							<Card.Img
								width={64}
								height={64}
								className="mr-3"
								src="./img/tab/tab-2.jpg"
								alt="second"
							/>
							<Card.Body>
								<p>
									Morbi eget efficitur turpis. Vivamus pellentesque tortor
									massa, venenatis pharetra leo laoreet a. Nullam non eleifend
									justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
									maximus. Sed condimentum mattis rhoncus.
								</p>
								<p className="socialMedia--tab">
									SHARE <i class="fab fa-facebook-f"></i>{' '}
									<i class="fab fa-twitter"></i>
								</p>
							</Card.Body>
						</Card>
					</Tab>
					<Tab eventKey="three" title="Third">
						<Card>
							<Card.Img
								width={64}
								height={64}
								className="mr-3"
								src="./img/tab/tab-3.jpg"
								alt="third"
							/>
							<Card.Body>
								<p>
									Morbi eget efficitur turpis. Vivamus pellentesque tortor
									massa, venenatis pharetra leo laoreet a. Nullam non eleifend
									justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
									maximus. Sed condimentum mattis rhoncus.
								</p>
								<p className="socialMedia--tab">
									SHARE <i class="fab fa-facebook-f"></i>{' '}
									<i class="fab fa-twitter"></i>
								</p>
							</Card.Body>
						</Card>
					</Tab>
				</Tabs>
			</div>
		</>
	);
};

export default Flipper;
