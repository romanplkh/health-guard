import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ numberPatients, itemsPerPage, getRecords, history }) => {
	const pages = Math.ceil(numberPatients / itemsPerPage);

	const { location } = history;

	let page = parseInt(new URLSearchParams(location.search).get('page'));

	console.log(page);

	const pagination = [];

	for (let i = 1; i <= pages; i++) {
		pagination.push(
			<li key={i} className={page === i ? 'page-item active' : 'page-item'}>
				<Link
					to={{ pathname: '/patients', search: `?page=${i}` }}
					className="page-link"
					onClick={() => getRecords(i)}
				>
					{i}
				</Link>
			</li>
		);
	}

	return (
		<div>
			<ul className="pagination">{pagination}</ul>
		</div>
	);
};

export default Pagination;
