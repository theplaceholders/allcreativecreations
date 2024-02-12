


UserController.createCustomer = async (req, res) => {
    try {
        const customer = req.body;
        const newCustomer = await createCustomer(customer);
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

UserController.createReservation = async (req, res) => {
    try {
        const reservation = req.body;
        const newReservation = await createReservation(reservation);
        res.status(201).json(newReservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

UserController.updateReservation = async (req, res) => {
    try {
        const { reservationId } = req.params;
        const updatedReservation = await updateReservation(reservationId, req.body);
        res.status(200).json(updatedReservation);
    } catch (error) {
        console.error('Error updating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

UserController.updateCustomerByCustomerId = async (req, res) => {
    try {
        const { customerId } = req.params;
        const updatedCustomer = await updateCustomerByCustomerId(customerId, req.body);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

