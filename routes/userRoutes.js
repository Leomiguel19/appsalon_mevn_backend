import express from 'express'
import authMiddleware from '../middleware/authMiddleware'
import { getUserAppointments } from '../controller/UserController'

const router = express.Router()

router.route('/:user/appointments')
    .get(authMiddleware, getUserAppointments)

export default router

