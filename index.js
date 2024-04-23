import express from 'express'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

// Configurar la app
const app = express()

// Conectar a DB
db()

// Definir una ruta
app.use('/api/services', servicesRoutes)

// Definir puerto
const PORT = process.env.PORT || 4000

// Arrancar la app
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ',PORT)
})