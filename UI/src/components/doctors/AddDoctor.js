import React, { useContext } from 'react';
import DoctorContext from '../context/doctorContext/doctorContext';
import RenderAddForm from '../render-add-form/renderAddForm';

const AddPatient = () => {
	const doctorCTX = useContext(DoctorContext);
	const { addRecord } = doctorCTX.actions;

	return <RenderAddForm type="doctors" add={addRecord} />;
};

export default AddPatient;
