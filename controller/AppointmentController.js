import { parse, formatISO, startOfDay, endOfDay, isValid } from 'date-fns'
import Appointment from "../models/Appointment.js";
import { json } from 'express';

const createAppointment = async (req, res) => {
    const appointment = req.body
    appointment.user = req.user._id.toString()
    try {
        const newAppointment = new Appointment(appointment)
        await newAppointment.save()

        res.json({
            msg: 'Tu reservacion se realizo correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}

const getAppointmentByDate = async (req, res) => {
    const { date } = req.query

    const newDate = parse(date, 'dd/MM/yyyy', new Date())

    if(!isValid(newDate)) {
        const error = new Error('Fecha NO válida')
        return res.status(400).json({msg: error.message})
    }

    const isoDate = formatISO(newDate)
    const appointments = await Appointment.find({ date: {
        $gte: startOfDay(new Date(isoDate)),
        $lte: endOfDay(new Date(isoDate))
    }}).select('time')

    res.json(appointments)
}

const getAppointmentById = async (req, res) => {
    console.log(req.params.id)
}

export {
    createAppointment,
    getAppointmentByDate,
    getAppointmentById
}