const router = require('express').Router();
const OrderStatus = require('../../models/orderStatus/orderStatus');


router.post('/', async (req, res) => {
    const { _id , orderStatus } = req.body;
    await OrderStatus.create({owner: _id, orderStatus})
    .then(orderStatus => {
        return res.json(orderStatus);
    })
    .catch(err => {
        console.error('orderStatus.orderStatus.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {

    await OrderStatus.find()
    .then(orderStatus => {
        return res.json(orderStatus);
    })
    .catch(err => {
        console.error('orderStatus.orderStatus', err);
        return res.sendStatus(400);
    });
});


module.exports = router;
