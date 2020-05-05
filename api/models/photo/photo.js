const mongoose = require('../../../db/db');
const { Schema: {Types: { Date, String }}} = mongoose;

const Photo = mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    Photo :  { type: String, required: false },
})

module.exports = mongoose.model('Photo', Photo)