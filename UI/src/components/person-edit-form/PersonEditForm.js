import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';

const PersonEditForm = ({ personDetails, actions }) => {
	const { resetEditMode, updateRecord } = actions;

	const [updatedRecord, setUpdatedRecord] = useState(personDetails);

	useEffect(() => {
		setUpdatedRecord(personDetails);
	}, [personDetails]);

	const onRecordTextChange = e => {
		setUpdatedRecord({ ...updatedRecord, [e.target.name]: e.target.value });
	};

	const onUpdateSubmit = e => {
		e.preventDefault();
		updateRecord(updatedRecord);

		setUpdatedRecord({
			email: '',
			phone: '',
			firstName: '',
			lastName: ''
		});
	};

	if (!personDetails) {
		return <Spinner />;
	}

	return (
		<React.Fragment>
			<div className="mx-5 w-100 mb-5">
				<div className="form-group">
					<label>First Name</label>
					<input
						type="text"
						name="firstName"
						className="form-control"
						value={updatedRecord.firstName}
						onChange={onRecordTextChange}
					/>
				</div>
				<div className="form-group">
					<label>Last Name</label>
					<input
						type="text"
						name="lastName"
						className="form-control"
						value={updatedRecord.lastName}
						onChange={onRecordTextChange}
					/>
				</div>
				<div className="form-group">
					<label>Email address</label>
					<input
						type="email"
						name="email"
						className="form-control"
						value={updatedRecord.email}
						onChange={onRecordTextChange}
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						type="text"
						name="phone"
						className="form-control"
						value={updatedRecord.phone}
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						onChange={onRecordTextChange}
					/>
				</div>

				<div className="d-flex justify-content-end">
					<button
						type="button"
						className="btn btn-primary"
						onClick={onUpdateSubmit}
					>
						Save
					</button>
					<button
						type="button"
						className="btn btn-secondary ml-3"
						onClick={resetEditMode}
					>
						Cancel
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PersonEditForm;
