const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    surname: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Campo obligatorio'],
        unique: true
    },
    country: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    phone: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    job: {
        type: String,
        required: [true, 'Campo obligatorio']
    }
    
});

module.exports = model('User', UserSchema);