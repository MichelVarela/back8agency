const router = require('express').Router();
const registerValidation = require('../validations/registerValidation');

const {index, register, getAllregister} = require('../controllers/indexController');

router.get('/', index);
router.post('/register', registerValidation, register);
router.get('/registerConfirmed', getAllregister);

module.exports = router;
