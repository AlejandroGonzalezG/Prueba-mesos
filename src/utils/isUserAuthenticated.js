import jwt from 'jsonwebtoken'


const verifyJWT = (tokenAuth) => {
    return jwt.verify(tokenAuth, 'secret_key')
}

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null){
        return res.json({message: 'Error al ingresar'})
    }
    jwt.verify(token, 'secret_key', (err, tokenAuth) => {
        if (err){
            return res.json({message: 'No tienes autorización'})
        }
        req.user = user;
        next()
    })
}