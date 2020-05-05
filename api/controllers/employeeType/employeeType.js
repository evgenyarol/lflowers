const router = require('express').Router();
const EmployeeType = require('../../models/employeeType/employeeType');


router.post('/', async (req, res) => {
    const { _id , employeeType } = req.body;
    await EmployeeType.create({owner: _id, employeeType})
    .then(employeeType => {
        return res.json(employeeType);
    })
    .catch(err => {
        console.error('employeeType.employeeType.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {

    await EmployeeType.find()
    .then(employeeType => {
        return res.json(employeeType);
    })
    .catch(err => {
        console.error('employeeType.employeeType', err);
        return res.sendStatus(400);
    });
});


module.exports = router;
