import { parse, formatISO } from 'date-fns'
import Appointment from "../models/Appointment.js";

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

    console.log(date)

    const newDate = parse(date, 'dd/MM/yyyy', new Date())
    const isoDate = formatISO(newDate)

    console.log(isoDate)
}

export {
    createAppointment,
    getAppointmentByDate
}