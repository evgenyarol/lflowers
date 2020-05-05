const mongoose = require('../../../db/db');
const { Schema: {Types: { String }}} = mongoose;

const OrderStatus = mongoose.Schema({
    orderStatus: { type: String, required: true},
})

module.exports = mongoose.model('OrderStatus', OrderStatus)