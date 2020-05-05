const mongoose = require('../../../db/db');
const { Schema: {Types: {ObjectId, String, Date, Number }}} = mongoose;

const Employee = mongoose.Schema({
    employeeStatus: { type: String, required: false},
    firstname: { type: String, required: true},
    lastname : { type: String, required: true},
    status: { type: String, required: false},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    order: {
        type: ObjectId,
        ref: 'Order',
        required: false
    },
})

module.exports = mongoose.model('Employee', Employee)
