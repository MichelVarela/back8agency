const User = require('../models/user');
const {validationResult} = require('express-validator');
const transporter = require('../config/mailer');

module.exports = {
    index: (req,res) => {
        res.status(200).send('Welcome to Banca&Seguros');
    },
    register: async (req,res) => {

        const errors =validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors.mapped());
        } else {
            try {

                const {name, surname, email, country, phone, job} = req.body;
    
                const user = new User({ // creamos un new User con los datos que vienen por req.body
                    name: name.trim(),
                    surname: surname.trim(),
                    email: email.trim(),
                    country: country.trim(),
                    phone: phone.trim(),
                    job: job.trim()
                });
    
                const userDB = await user.save(); // guardamos el new User creado
    
                console.log('------ usuario creado ------');
                res.status(200).json({
                    error: null,
                    data: userDB
                });
                
                const info = await transporter.sendMail({
                    from: `"Bancatest" <${process.env.MAILER_USER}>`, // sender address
                    to: `${email}`, // list of receivers
                    subject: 'Gracias por tu registro', // Subject line
                    html: `<h1>Registro para Webinar</h1>
                        <br>
                        <p>Muchas gracias ${name}, te invitan a este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital. </p>`
                });
        
            } catch (err) {
                res.status(400).json(err);
            }
        }

    },
    getAllregister: async(req,res) => {

        try {
            const users = await User.find(); 
            res.status(200).json({count: users.length,registers: users});

        } catch (err) {
            res.status(400).json(err);
        }
    }
}