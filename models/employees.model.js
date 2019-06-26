const mongoose = require('mongoose');

//Setting up the fields
var employeesSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.' //Required 
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

//Custom validation for email
employeesSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(val);
}, 'Invalid email. ');

//Putting into mongo
mongoose.model('Employee',employeesSchema)