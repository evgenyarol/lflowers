const mongoose = require('../../../db/db');
const { Schema: {Types: { Date, String }}} = mongoose;

const Category = mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    Category : { type: String, required: false },
})

module.exports = mongoose.model('Category', Category)