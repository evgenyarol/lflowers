const router = require('express').Router();
const EmployeeStatus = require('../../models/employeeStatus/employeeStatus');

router.post('/', async (req, res) => {
    const { _id , employeeStatus } = req.body;
    await EmployeeStatus.create({owner: _id, employeeStatus})
    .then(employeeStatus => {
        return res.json(employeeStatus);
    })
    .catch(err => {
        console.error('employeeStatus.employeeStatus.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {

    await EmployeeStatus.find()
    .then(employeeStatus => {
        return res.json(employeeStatus);
    })
    .catch(err => {
        console.error('employeeStatus.employeeStatus', err);
        return res.sendStatus(400);
    });
});


module.exports = router;
