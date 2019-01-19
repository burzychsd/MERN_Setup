import User from './../models/user.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'

// Create new user
const create = (req, res, next) => {
    const user = new User(req.body)
    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.status(200).json({
            message: 'Successfully signed up!'
        })
    })
}

// Get list of users
const list = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(404).json({
                error: 'User not found'
            })
        }
        res.json(users)
    }).select('name email updated created')
}

// Query the database by _id
// next func pass re.profile to next functions
const userByID = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(404).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        req.profile = user
        next()
    })
}

// Read specific user
const read = (req, res) => {
    req.profile.hash_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

// Update specific user
const update = (req, res, next) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.updated = Date.now()
    user.save((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    })
}

// Delete specific user
const remove = (req, res, next) => {
    let user = req.profile
    user.remove((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    })
}

export default { create, list, userByID, read, update, remove }