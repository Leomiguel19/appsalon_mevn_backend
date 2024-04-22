const express = require('express')

// Configurar la app
const app = express()

// Definir una ruta
app.get('/', (req, res) => {
    res.send('Hola')
})

// Definir puerto
const PORT = process.env.PORT || 4000

// Arrancar la app
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ',PORT)
})