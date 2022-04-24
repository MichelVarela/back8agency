const {check} = require('express-validator');

module.exports = [ 
  
  check('name').notEmpty().withMessage('Campo obligatorio'),
  check('surname').notEmpty().withMessage('Campo obligatorio'),
  check('email').isEmail().withMessage('debe ser un email valido'),
  check('country').notEmpty().withMessage('Campo obligatorio'),
  check('phone').notEmpty().withMessage('Campo obligatorio'),
  check('job').notEmpty().withMessage('Campo obligatorio'),
  
]