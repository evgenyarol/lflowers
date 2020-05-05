const router = require('express').Router();
const Order = require('../../models/orders/order');


router.post('/', async (req, res) => {
    const { _id , login, total, phone, comment, product, adress } = req.body;
    let  createdAt = new Date().toLocaleString();
    await Order.create({owner: _id, login, createdAt, product, total, phone, comment, adress})
    .then(order => {
        return res.json(order);
    })
    .catch(err => {
        console.error('order.order.post', err);
        return res.sendStatus(400);
    });
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    await Order.deleteOne({owner: _id, _id: id})
    .then(order => {
        return res.json(order);
    })
    .catch(err => {
        console.error('Order.Order.put', err);
        return res.sendStatus(400);
    });
});

router.get('/', async (req, res) => {

    await Order.find()
    .then(order => {
        return res.json(order);
    })
    .catch(err => {
        console.error('Order.Order', err);
        return res.sendStatus(400);
    });
});

module.exports = router;
