const mongoose = require('../../../db/db');
const { Schema: {Types: {ObjectId, String, Date }}} = mongoose;

const Employee = mongoose.Schema({
    employeeType: [{ type: String, required: false}],
    firstname: { type: String, required: false},
    lastname : { type: String, required: false},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    order: {
        type: ObjectId,
        ref: 'Order',
        required: false
    },
})

module.exports = mongoose.model('Employee', Employee)
