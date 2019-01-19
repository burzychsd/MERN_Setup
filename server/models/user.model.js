import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Email is not valid. Try again'],
        required: 'Email is required'
    },
    hashed_password: {
        type: String,
        required: 'Password is required'
    },
    salt: String,
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
})

// virtual field for password
UserSchema.virtual('password').set((password) => {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
}).get(() => this._password)

// password validation
UserSchema.path('hashed_password').validate((v) => {
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.')
    }
    if (this.isNew && !this._password) {
        this.invalidate('password', 'Password is required')
    }
}, null)


// user schema methods
UserSchema.methods = {
    authenticate: (plainText) => {
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: (password) => {
        if(!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                         .update(password)
                         .digest('hex')
        } catch (err) {
            return ''
        }
    },
    makeSalt: () => {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
}

export default mongoose.model('User', UserSchema)