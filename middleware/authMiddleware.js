const authMiddleware = (req, res, next) => {
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('Si hay Token')
    }else{
        console.log('NO hay Token')
        const error = new Error('Token no valido o inexistente')
        res.status(403).json({msg: error.message})
    }

    next()
}

export default authMiddleware