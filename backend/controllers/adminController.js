const {
    updateCustomerByCustomerId,
    getCustomerByCustomerId,
    getCustomerByInternalId,
    createUser,
    updateUserByUsername,
    getUserByUsername,
    getUserByEmail,
    getUserByRole,
    getAllCustomers
} = require('../database/db'); // Import database functions

const AdminController = {};



AdminController.updateCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const updatedCustomer = await updateCustomerByCustomerId(customerId, req.body);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



AdminController.handleGetCustomerByCustomerId = async (req, res) => {
    try {
        const { customerId } = req.params;
        const customer = await getCustomerByCustomerId(customerId);
        res.status(200).json(customer);
    } catch (error) {
        console.error('Error fetching customer by customer ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

AdminController.getCustomerByInternalId = async (req, res) => {
    try {
        const { internalId } = req.params;
        const customer = await getCustomerByInternalId(internalId);
        res.status(200).json(customer);
    } catch (error) {
        console.error('Error fetching customer by internal ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

AdminController.createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

AdminController.updateUser = async (req, res) => {
    try {
        const { username } = req.params;
        const updatedUser = await updateUserByUsername(username, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

AdminController.getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await getUserByUsername(username);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user by username:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

AdminController.getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await getUserByEmail(email);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user by email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

AdminController.getUserByRole = async (req, res) => {
    try {
        const { role } = req.params;
        const user = await getUserByRole(role);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user by role:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

AdminController.handleGetAllCustomers = async (req, res) => {
    try {
        const customers = await getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        console.error('Error fetching all customers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = AdminController;
