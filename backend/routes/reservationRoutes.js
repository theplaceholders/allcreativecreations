const express = require("express");
const reservationController = require("../controllers/reservationController");
const reservationRouter = express.Router();

reservationRouter.get("/list", (req, res, next) => {
    reservationController.handleGetAllReservations(req, res, next);
});

reservationRouter.get("/infolist", (req, res, next) => {
    reservationController.getAllReservationsWithCustomerInfo(req, res, next);
});
reservationRouter.get("/reservationservices", (req, res, next) => {
    reservationController.getReservationServices(req, res, next);
});
module.exports = reservationRouter;