const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient');
const doctorController = require('../controllers/doctor');
const adminController = require('../controllers/admin');

//!Patient Management /api/admin
//#region Patients
//Get patients
router.get('/patients', patientController.getPatients);

//Get patient
router.get('/patients/:id', patientController.getPatient);

//Update patient
router.put('/patients/:id', patientController.updatePatient);

//Add patient
router.post('/patients', patientController.addPatient);

//Delete patient
router.delete('/patients/:id', patientController.deletePatient);

//#endregion

//!Doctor Management /api/admin
//#region Doctors
//Get doctors
router.get('/doctors', doctorController.getDoctors);

//Get doctor
router.get('/doctors/:id', doctorController.getDoctor);

//Update doctor
router.put('/doctors/:id', doctorController.updateDoctor);

//Add doctor
router.post('/doctors', doctorController.addDoctor);

//Delete doctor
router.delete('/doctors/:id', doctorController.deleteDoctor);

//#endregion

//!Register admin
router.post('/', adminController);

module.exports = router;
