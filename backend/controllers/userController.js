const { users, reservations, customers } = require('../database/helper');

const userController = {};

userController.createCustomer = async (req, res) => {
    try {
        const customer = req.body;
        const newCustomer = await users.create(customer);
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

userController.createReservation = async (req, res) => {
    try {
        const reservation = req.body;
        const newReservation = await reservations.create(reservation);
        res.status(201).json(newReservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

userController.updateReservation = async (req, res) => {
    try {
        const { reservationId } = req.params;
        req.body.reservationId = reservationId;
        const updatedReservation = await reservations.update(req.body);
        res.status(200).json(updatedReservation);
    } catch (error) {
        console.error('Error updating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

userController.handleUpdateCustomerByCustomerId = async (req, res) => {
    try {
        const { customerId } = req.params;
        req.body.customerId = customerId;
        const updatedCustomer = await customers.update.byCustomerId(req.body);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

userController.handleGetCustomerByCustomerId = async (req, res) => {
    try {
        const {customerId} = req.params;
        const getCustomer = await customers.get.byCustomerId(customerId)
        res.status(200).json(getCustomer)
    } catch (error) {
        console.error('Error getting customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = userController;

