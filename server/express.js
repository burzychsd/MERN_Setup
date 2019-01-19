import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import template from './../template'

// only for development - comment this out while moving to deployment
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

// only for development - comment this out while moving to deployment
devBundle.compile(app)

// config bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// config cookieParser
app.use(cookieParser())

// config compression
app.use(compress())

// config helmet
app.use(helmet())

// config cors
app.use(cors())

// to serve static files from dist folder
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// routing
app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send(template())
})

// auth error handling
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: err.name + ': ' + err.message })
    }
})

export default app