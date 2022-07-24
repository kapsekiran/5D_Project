const express = require('express');
const router = express.Router();


const Registration = require('../controllers/memberRegistration');
const Login =  require('../controllers/memberLogin');
const Moment = require('../controllers/addMoments');
const MomentList = require('../controllers/listMoments');
const U_Moment = require('../controllers/updateMoments');
const D_Moment = require('../controllers/deleteMoments');
const upload = require('../middleware/uploadFile');
const authenticate = require('../middleware/authenticate');

router.post('/memberRegistration',Registration.memberRegistration);
router.post('/memberLogin', Login.memberLogin);
router.post('/addMoment', authenticate,upload.single('image'),Moment.addMoment);
router.get('/listMoment', authenticate, MomentList.listMoments);
router.post('/updateMoment', authenticate, upload.single('image'),U_Moment.updateMoment);
router.post('/deleteMoment', authenticate,D_Moment.deleteMoment);

module.exports = router;