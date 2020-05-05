const bodyParser = require('body-parser');
const router = require('express').Router();

router.use(bodyParser.json());
router.use(require('./controllers/auth/user'))
router.use('/product',require('./controllers/product/product'));
router.use('/order',require('./controllers/order/order'));
router.use('/employee',require('./controllers/employee/employee'));
router.use('/employee/types',require('./controllers/employeeType/employeeType'));
router.use('/employee/statuses',require('./controllers/employeeStatus/employeeStatus'));
router.use('/order/statuses',require('./controllers/orderStatus/orderStatus'));

module.exports = router;
