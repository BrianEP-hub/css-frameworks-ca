import React from 'react';
import { Pagination, Container } from 'react-bootstrap';
import  NewsCards  from './NewsCards/NewsCards';

let active = 1;
let items = [];

for (let number = 1; number <= 4; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
			{number}
		</Pagination.Item>,
	);
}

const News = () => {
	return (
		<>
			<Container>
				<div>
					<h2>News</h2>
				</div>
				<Pagination>{items}</Pagination>
				<NewsCards />
			</Container>
			<Container>
				<Pagination>{items}</Pagination>
			</Container>
		</>
	);
};

export default News;
