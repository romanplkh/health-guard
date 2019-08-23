import React from 'react';
import Spinner from '../layout/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersonEditForm from '../person-edit-form/PersonEditForm';
import {
	faArrowAltCircleLeft,
	faEdit,
	faTrash
} from '@fortawesome/free-solid-svg-icons';

const PersonDetails = ({ data, actions, editMode, occupation = null }) => {
	const { setEditMode, deleteRecord } = actions;

	if (!data) {
		return (
			<h2 className="text-center mt-5">
				<FontAwesomeIcon
					icon={faArrowAltCircleLeft}
					size="lg"
					className="mr-2"
				/>
				Select Patient
			</h2>
		);
	}

	if (data && data.image === null) {
		return <Spinner />;
	}
	return (
		<React.Fragment>
			<div className="card mb-3" style={{ width: '20rem' }}>
				<div className="row justify-content-center pt-2">
					<img
						src={data.image}
						className="img-thumbnail "
						alt="..."
						style={{ width: '10rem' }}
					/>
				</div>

				<div className="card-body">
					<h5 className="card-title">
						{data.firstName}&nbsp; {data.lastName}
					</h5>
					<ul className="list-group list-group-flush mb-3">
						<li className="list-group-item">Email: {data.email}</li>
						<li className="list-group-item">Phone: {data.phone}</li>
						<li className="list-group-item">
							{' '}
							{occupation ? 'Specialization:' : 'Type:'}{' '}
							{data.type || data.profile}
						</li>
					</ul>
					<div className="float-right">
						<button className="btn btn-warning" onClick={setEditMode}>
							<FontAwesomeIcon icon={faEdit} className="mr-2" />
							Edit
						</button>
						<button
							className="btn btn-danger ml-2"
							onClick={() => deleteRecord(data._id)}
						>
							<FontAwesomeIcon icon={faTrash} className="mr-2" />
							Delete
						</button>
					</div>
				</div>
			</div>
			<br />

			{editMode && <PersonEditForm personDetails={data} actions={actions} />}
		</React.Fragment>
	);
};

export default PersonDetails;
