const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/customer/:customerId', (req, res, next) => {
    userController.handleGetCustomerByCustomerId(req, res, next);
});


module.exports = userRouter;    

