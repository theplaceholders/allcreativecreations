const express = require("express");
const { 
    handleGetAllCustomers,
    handleGetCustomerByCustomerId
} = require("../controllers/customerController");
const customerRouter = express.Router();

customerRouter.get("/list", (req, res, next) => {
    handleGetAllCustomers(req, res, next);
});

customerRouter.get("/:customerId", (req, res, next) => {
    handleGetCustomerByCustomerId(req, res, next);
});

module.exports = customerRouter;