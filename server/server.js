import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// server
app.listen(config.port, (err)  => {
    if(err) { console.log(err) }
    console.log(`Server started on port ${config.port}`)
})

// Database connection with mongoose
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true })

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database ${mongoUri}`)
})