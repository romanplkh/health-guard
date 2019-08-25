import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({
	numberRecords,
	itemsPerPage,
	getRecords,
	history,
	path
}) => {
	const pages = Math.ceil(numberRecords / itemsPerPage);

	const { location } = history;

	let page = parseInt(new URLSearchParams(location.search).get('page'));

	const pagination = [];

	for (let i = 1; i <= pages; i++) {
		pagination.push(
			<li key={i} className={page === i ? 'page-item active' : 'page-item'}>
				<Link
					to={{ pathname: path, search: `?page=${i}` }}
					className="page-link"
					onClick={() => getRecords(i)}
				>
					{i}
				</Link>
			</li>
		);
	}

	return (
		<div className="d-flex flex-row-reverse">
			<ul className="pagination justify-content-end">{pagination}</ul>
		</div>
	);
};

export default Pagination;
