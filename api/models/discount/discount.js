const mongoose = require('../../../db/db');
const { Schema: {Types: { Date, String }}} = mongoose;

const Discount = mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    Discount :  { type: String, required: false },
})

module.exports = mongoose.model('Discount', Discount)