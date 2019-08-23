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
							{...person}
							key={person._id}
							onPersonClick={() => onPersonClick(person._id)}
						/>
					);
				})}

			{/* {details && (
				<Pagination {...details} history={history} getRecords={getRecords} />
			)} */}
		</Fragment>
	);
};

export default PersonsList;
