const mongoose = require('../../../db/db');
const { Schema: {Types: { ObjectId, String, Date, Number }}} = mongoose;

const Order = mongoose.Schema({
    login: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    product: [{
        type: ObjectId,
        ref: 'Product'
    }],
    total : { type: Number, required: false},
    adress  : { type: String, required: true },
    phone : { type: String, required: false },
    comment : { type: String, required: false },
})

module.exports = mongoose.model('Order', Order)