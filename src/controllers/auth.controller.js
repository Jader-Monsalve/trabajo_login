import User from '../models/user.models.js';
import bcrypt from 'bcrypt';
import { createTokenAcess } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createTokenAcess({ id: userSaved._id })
        res.cookie('token', token)
        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })
    } catch (error) {
        res.status(500).json({ massage: error.massage })
    }
};

export const login = (req, res) = res.send("Login");
