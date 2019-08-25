import React, { useState, useContext, useEffect } from 'react';
import PatientContext from '../context/patientContext/patientContext';
import RenderAddForm from '../render-add-form/renderAddForm';

const AddPatient = () => {
	const patientCTX = useContext(PatientContext);
	const { addPatient } = patientCTX.actions;

	return <RenderAddForm type="patients" add={addPatient} />;
};

export default AddPatient;
