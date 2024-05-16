import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js' 
import appointmentsRoutes from './routes/appointmentsRoutes.js' 

// Variables de entorno
dotenv.config()

// Configurar la app
const app = express()

// Leer datos via body
app.use(express.json())

// Conectar a DB
db()


// Configurar CORS
const whiteList = [process.env.FRONTEND_URL, undefined]

const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            // Permite la conexion
            callback(null, true)
        }else{
            // NO Permitir la conexion
            callback(new Error('Error de CORS'))
        }
    }
}

app.use(cors(corsOptions))

// Definir una ruta
app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentsRoutes)

// Definir puerto
const PORT = process.env.PORT || 4000

// Arrancar la app
app.listen(PORT, () => {
    console.log( colors.blue('El servidor se esta ejecutando en el puerto: '),colors.bold(PORT))
})

