const { customers, reservations }  = require('../database/helper');
const reservationRouter = require('../routes/reservationRoutes');

const reservationController = {};

reservationController.handleGetAllReservations = async (req, res, next) => {
    try {
        const reservationsList = await reservations.get.all();
        res.send(reservationsList);
    } catch (error) {
        console.error('Error fetching all reservations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

reservationController.createReservation = async (req, res) => {
    try {
        const reservation = req.body;
        const newReservation = await reservations.create(reservation);
        res.status(201).json(newReservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

reservationController.getAllReservationsWithCustomerInfo = async (req, res) => {
    try {
        const reservationsList = await reservations.get.all();
        await Promise.all(reservationsList.map(async (reservation) => {
            const customer = await customers.get.__byInternalId(reservation.customer_id);
            delete customer[0].internal_id;
            delete reservation.internal_id;
            delete reservation.customer_id;
            reservation.customer = customer[0];
            return reservation;
        }));
        res.status(200).json(reservationsList);
    } catch (error) {
        console.error('Error fetching all reservations with customer info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const ReservationController = {};

ReservationController.getReservationServices = async (req, res) => {
    try {
        const { reservationId } = req.params;
        const services = await getServicesByReservationId(reservationId);
        res.status(200).json(services);
    } catch (error) {
        console.error('Error getting services for reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = reservationController;