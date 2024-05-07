import { createTransport } from "../config/nodemailer.js"

export async function sendEmailVerification(){
    const transporter = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525, 
        "fc14f7f77a9b44",
        "ffe6ddd8da048f",
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'AppSalon',
        to: 'correo@correo.com',
        subject: 'AppSalon - Confirma tu cuenta',
        text: 'AppSalon - Confirma tu cuenta',
        html: 'Probando email',
    })

    console.log('Mensaje Enviado', info.messageId)
}