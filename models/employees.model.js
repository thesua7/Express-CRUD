const mongoose = require('mongoose');

//Setting up the fields
var employeesSchema = new mongoose.Schema({
    fullName: {
        type: String
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

//Putting into mongo
mongoose.model('Employee',employeesSchema)