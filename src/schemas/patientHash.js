const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientHashSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    patientID: {
        type: String,
    },
    hash: {
        type: String,
    },
})

const patientHashModel = mongoose.model('institutions', patientHashSchema);

module.exports = patientHashModel;