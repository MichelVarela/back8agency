const router = require('express').Router();
const registerValidation = require('../validations/registerValidation');

const {register, getAllregister} = require('../controllers/apiController');

router.post('/register', registerValidation, register);
router.get('/registerConfirmed', getAllregister);

module.exports = router;