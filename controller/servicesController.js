import { services } from '../data/beautyServices.js'

const createService = (req, res) => {
    console.log('Desde createService')
}

const getServices = (req, res) => {
    res.json(services)
}

export {
    getServices,
    createService
}