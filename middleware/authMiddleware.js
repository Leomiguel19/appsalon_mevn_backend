const authMiddleware = (req, res, next) => {
    console.log('Desde authMiddleware')

    next()
}

export default authMiddleware