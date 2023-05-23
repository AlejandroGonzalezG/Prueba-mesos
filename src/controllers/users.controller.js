import bcryptjs from 'bcryptjs'
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken';



const createJWT = async (payload) => {
    const singOptions = {
        algorithm: 'HS512',
        expiresIn: '7d'
    }

    return jwt.sign(payload, 'secret-key')
}

export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ where: { email: req.body.email } })
    if (userExists) {
        return res.json({ message: 'El email ingresado ya existe' })
    }
    try {
        const hashPass = await bcryptjs.hash(password, 3);
        const user = await User.create({
            email,
            password: hashPass
        });
        return res.json(user)
    } catch (error) {
        res.json({ message: 'Ha ocurrido un error mientras se realizaba el registro' })
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.json({ message: 'El email no existe' })
        }
        if (await bcryptjs.compare(password, user.password)) {
            const token = await createJWT({
                id: user.id,
                email: user.email,
                role: user.role
            })
            return res.json(token)
        } else {
            res.json({ message: 'Contraseña errónea' })
        }

    } catch (error) {
        res.json({ message: 'Ha ocurrido un error mientras se hacia login' })
    }
}