const mongoose = require('../../../db/db');
const { Schema: {Types: { String }}} = mongoose;

const EmployeeStatus = mongoose.Schema({
    employeeStatus: { type: String, required: true},
})

module.exports = mongoose.model('EmployeeStatus', EmployeeStatus)