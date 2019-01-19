import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes'

const app = express()

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

// routing
app.use('/', userRoutes)

export default app