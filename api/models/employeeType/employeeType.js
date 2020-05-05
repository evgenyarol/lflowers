const mongoose = require('../../../db/db');
const { Schema: {Types: { String }}} = mongoose;

const EmployeeType = mongoose.Schema({
    employeeType: { type: String, required: true},
})

module.exports = mongoose.model('EmployeeType', EmployeeType)