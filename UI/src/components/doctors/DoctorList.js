import React, { useContext, Fragment} from 'react';
import DoctorContext from '../context/doctorContext/doctorContext';
import DoctorItem from '../doctors/DoctorItem';
import Pagination from '../layout/Pagination';
import PersonsList from '../persons-list/PersonsList';

const DoctorList = () => {
	const doctorCTX = useContext(DoctorContext);
	const { doctors } = doctorCTX;
	const { getRecords, getRecord } = doctorCTX.actions;

	return (
		<Fragment>
			<table className="table table-striped mt-3">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Speciality</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<PersonsList
						getRecords={getRecords}
						getRecord={getRecord}
						element={DoctorItem}
						data={doctors}
					/>
				</tbody>
			</table>
			{/* {details && (
				<Pagination {...details} history={history} getRecords={getRecords} />
			)} */}
		</Fragment>
	);
};

export default DoctorList;
