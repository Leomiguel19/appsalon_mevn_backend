import express from 'express'
import { createAppointment, getAppointmentByDate, getAppointmentById, updateAppointment } from '../controller/AppointmentController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .post(authMiddleware, createAppointment)
    .get(authMiddleware, getAppointmentByDate)

router.route('/:id')
    .get(authMiddleware, getAppointmentById)
    .get(authMiddleware, updateAppointment)

export default router
