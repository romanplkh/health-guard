import React from 'react';

const DoctorItem = ({
	_id,
	firstName,
	lastName,
	phone,
	email,
	profile,
	price,
	onPersonClick
}) => {
	return (
		<tr key={_id} style={{ cursor: 'pointer' }} onClick={onPersonClick}>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td>{profile}</td>
			<td>CA$ {price && price.toFixed(2)}</td>
		</tr>
	);
};

export default DoctorItem;
