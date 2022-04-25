## Proyecto Webinar Virtual Event

### Descripción
Presentamos el back de registro para el Virtual Event de Banca&Seguros,
"Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital."

Para realizar el registro el usuario debe completar el formulario indicado en el front.

Entry point: http://localhost:4000/
La petición POST se realiza por las ruta: http://localhost:4000/api/register
API de usuarios registrados: http://localhost:4000/api/registerConfirmed

Al finalizar el proceso el usuario recibira un mail de confirmación de su registro, con un email creado para esta acción.

### A tener en cuenta
Validación de datos recibidos por el front, en caso de estar vacios, no tener formato email o ser un usuario con email ya registrado

API creada con el detalle de cada usuario, y el total de registrados

100% responsive

Uso de nodemailer para el envió de un mensaje personalizado con el nombre de la persona registrada a traves de un email creado para esta acción

### Tecnologías utilizadas: 
- Node JS
- Express
- Express-validator
- Nodemailer
- Mongoose
- dotenv
- cors