const express = require('express');
const router = express.Router();

// Mock database to store appointments
let appointments = [];

// Endpoint to create a new appointment
router.post('/appointments', (req, res) => {
    const { id, date, time, description } = req.body;
    const newAppointment = { id, date, time, description };
    appointments.push(newAppointment);
    res.status(201).json({ message: 'Appointment created', appointment: newAppointment });
});

// Endpoint to reschedule an appointment
router.put('/appointments/:id', (req, res) => {
    const { id } = req.params;
    const { date, time } = req.body;
    const appointment = appointments.find(app => app.id === id);
    if (appointment) {
        appointment.date = date || appointment.date;
        appointment.time = time || appointment.time;
        res.json({ message: 'Appointment rescheduled', appointment });
    } else {
        res.status(404).json({ message: 'Appointment not found' });
    }
});

// Endpoint to cancel an appointment
router.delete('/appointments/:id', (req, res) => {
    const { id } = req.params;
    appointments = appointments.filter(app => app.id !== id);
    res.json({ message: 'Appointment canceled' });
});

module.exports = router;