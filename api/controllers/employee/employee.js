const router = require('express').Router();
const Employee = require('../../models/employee/employee');
const Order = require('../../models/orders/order');

router.post('/', async (req, res) => {
    const { _id , firstname, status, order , employeeType} = req.body;
    let  createdAt = new Date().toLocaleString();

    await Employee.create({owner: _id, firstname, status, createdAt, order, employeeType})
    .then(employee => {
        return res.json(employee);
    })
    .catch(err => {
        console.error('employee.employee.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {

    await Employee.find().populate('order')
    .then(employee => {
        return res.json(employee);
    })
    .catch(err => {
        console.error('employee.employee', err);
        return res.sendStatus(400);
    });
});


router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { order, status, _id } = req.body;
    let  updatedAt = new Date().toLocaleString();
    
    if (!!order) {
        await Employee.updateMany({owner: _id, _id: id}, { $set: {order, updatedAt}})
        .then(employee => {
            return res.json(employee);
        })
        .catch(err => {
            console.error('Employee.Employee.put', err);
            return res.sendStatus(400);
        });
    }
    if (!!status) {
        await Employee.updateMany({owner: _id, _id: id}, { $set: {status, updatedAt}})
    .then(employee => {
        return res.json(employee);
    })
    .catch(err => {
        console.error('Employee.Employee.put', err);
        return res.sendStatus(400);
    });
    }

    
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    await Employee.deleteOne({owner: _id, _id: id})
    .then(employee => {
        return res.json(employee);
    })
    .catch(err => {
        console.error('Employee.Employee.put', err);
        return res.sendStatus(400);
    });
});

module.exports = router;
