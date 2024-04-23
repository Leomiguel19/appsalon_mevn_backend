import mongoose from "mongoose"

export const db = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://leomiguel19:leomiguel19$++@cluster0.jtkpcsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

        console.log('Se conecto corectamente')
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}