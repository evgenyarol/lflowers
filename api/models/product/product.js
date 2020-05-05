const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Number }}} = mongoose;

const Product = mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    photo: { type: String, required: true },
    category: { type: String, required: true },
})

module.exports = mongoose.model('Product', Product)