import express from 'express'
import { createService, getServices, getServiceById, updateService, deleteService } from '../controller/servicesController.js'

const router = express.Router()

router.route('/')
    .get(getServices)
    .post(getServices)

router.route('/:id')
    .get(getServiceById)
    .put(updateService)
    .delete(deleteService)

export default router