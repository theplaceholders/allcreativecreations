const { createReservation, getAllReservations } = require('../database/db');

const reservationController = {};

reservationController.handleGetAllReservations = async (req, res, next) => {
    try {
        console.log('Getting all reservations...');
        const reservations = await getAllReservations();
        res.send(reservations);
    } catch (error) {
        console.error('Error fetching all reservations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

reservationController.createReservation = async (req, res) => {
    try {
        const reservation = req.body;
        const newReservation = await createReservation(reservation);
        res.status(201).json(newReservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = reservationController;