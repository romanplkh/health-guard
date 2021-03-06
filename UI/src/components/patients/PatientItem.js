import React from 'react';

const PatientItem = ({
	firstName,
	lastName,
	phone,
	email,
	type,
	onPersonClick
}) => {
	return (
		<tr style={{ cursor: 'pointer' }} onClick={onPersonClick}>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td>
				<span
					className={
						type === 'General' ? 'badge badge-secondary' : 'badge badge-warning'
					}
				>
					{type}
				</span>
			</td>
		</tr>
	);
};

export default PatientItem;
