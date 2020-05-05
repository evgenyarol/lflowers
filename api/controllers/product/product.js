const router = require('express').Router();
const Product = require('../../models/product/product');


router.post('/', async (req, res) => {
    const { title, price, description, amount, photo, category } = req.body;

    await Product.create({ title, price, description, amount, photo, category})
    .then(product => {
        return res.json(product);
    })
    .catch(err => {
        console.error('product.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {

    await Product.find()
    .then(product => {
        return res.json(product);
    })
    .catch(err => {
        console.error('product.product', err);
        return res.sendStatus(400);
    });
});


module.exports = router;
