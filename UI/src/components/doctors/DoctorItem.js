import React from 'react';

const DoctorItem = ({
	firstName,
	lastName,
	phone,
	email,
	profile,
	price,
	onPersonClick
}) => {
	return (
		<tr style={{ cursor: 'pointer' }} onClick={onPersonClick}>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td>{profile}</td>
			<td>CA$ {price.toFixed(2)}</td>
		</tr>
	);
};

export default DoctorItem;
