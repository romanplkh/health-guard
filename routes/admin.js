const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

//!Patient Management /api/admin
//Get patients
router.get('/patients', adminController.getPatients);

//Get patient
router.get('/patients/:id', adminController.getPatient);

//Update patient
router.put('/patients/:id', adminController.updatePatient);

//Add patient
router.post('/patients', adminController.addPatient);

//Delete patient
router.delete('/patients/:id', adminController.deletePatient);

module.exports = router;
