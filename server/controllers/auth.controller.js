import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'

// SignIn functionality
const signin = (req, res) => {
    User.findOne({
        'email': req.body.email
    }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: 'User not found'
            })
        }

        if (!user.authenticate(req.body.password)) {
            return res.status(401).json({
                error: 'Email and password do not match'
            })
        }

        const token = jwt.sign({
            _id: user._id
        }, config.jwtSecret)

        res.cookie('t', token, {
            expire: new Date() + 9999
        })

        return res.json({
            token,
            user: { _id: user._id, name: user.name, email: user.email }
        })
    })
}

// SignOut functionality
const signout = (req, res) => {
    res.clearCookie('t')
    return res.status(200).json({
        message: 'You have been sign out'
    })
}

// is valid (JWT) | authentication
const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth'
})

// check if user is authorize for editing | authorization
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!authorized) {
        return res.status(403).json({
            error: 'User is not authorized'
        })
    }
    next()
}


export default { signin, signout, requireSignin, hasAuthorization }