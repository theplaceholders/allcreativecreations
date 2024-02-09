const {getAllCustomers, getCustomerByCustomerId} = require('../database/db');
// Function to get a list of customers
exports.handleGetAllCustomers = async (req, res, next) => {
    try{
        console.log('Getting all customers...');
        const customers = await getAllCustomers();
        res.send(customers);
    } catch (e) {
        next(e)
    }
}

exports.handleGetCustomerByCustomerId = async (req, res, next) => {
    try{
        console.log('Getting customer by customer ID...');
        const customer = await getCustomerByCustomerId(req.params.customerId);
        res.send(customer);
    } catch (e) {
        next(e)
    }
}