import express from 'express'
import { createAppointment, getAppointmentByDate } from '../controller/AppointmentController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .post(authMiddleware, createAppointment)
    .get(authMiddleware, getAppointmentByDate)

export default router
