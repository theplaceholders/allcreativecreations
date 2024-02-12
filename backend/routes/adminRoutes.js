
const express = require('express');
const AdminController = require('../controllers/adminController');
const adminRouter = express.Router();

adminRouter.put('/customer/:customerId', (req, res, next) => {
    AdminController.updateCustomer(req, res, next);
})

adminRouter.get('/customer/:customerId', (req, res, next) => {
    AdminController.handleGetCustomerByCustomerId(req, res, next);
})

adminRouter.get('/customer/internal/:internalId', (req, res, next) => {
    AdminController.getCustomerByInternalId(req, res, next);
})

adminRouter.post('/user', (req, res, next) => {
    AdminController.createUser(req, res, next);
})

adminRouter.put('/user/:username', (req, res, next) => {
    AdminController.updateUser(req, res, next);
})

adminRouter.get('/user/:username', (req, res, next) => {
    AdminController.getUserByUsername(req, res, next);
})

adminRouter.get("/list", (req, res, next) => {
    AdminController.handleGetAllCustomers(req, res, next);
});

adminRouter.get("/role/:role", (req, res, next) => {
    AdminController.getUserByRole(req, res, next);
});
module.exports = adminRouter;



