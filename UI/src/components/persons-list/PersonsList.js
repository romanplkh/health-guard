import React, { useEffect, Fragment } from 'react';

const PersonsList = ({ getRecord, getRecords, element, data }) => {
	useEffect(() => {
		getRecords();
		//eslint-disable-next-line
	}, []);

	const onPersonClick = id => {
		getRecord(id);
	};

	const PersonItem = element;

	return (
		<Fragment>
			{data &&
				data.map(person => {
					return (
						<PersonItem
							key={person._id}
							{...person}
							onPersonClick={() => onPersonClick(person._id)}
						/>
					);
				})}
		</Fragment>
	);
};

export default PersonsList;
