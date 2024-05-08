import express from 'express'
import { register, verifyAccount } from '../controller/authController.js'

const router = express.Router()

// Rutas de autenticacion y registro de usuarios

router.post('/register', register)
router.get('/verify/:token', verifyAccount)
router.post('/login', login)

export default router