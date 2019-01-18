import path from 'path'
import express from 'express'
import template from './../template'
import { MongoClient } from 'mongodb'

// only for development - comment this out while moving to deployment
import devBundle from './devBundle'

const app = express()

// only for development - comment this out while moving to deployment
devBundle.compile(app)

// to serve static files from dist folder
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// routing
app.get('/', (req, res) => {
    res.status(200).send(template())
})

// server
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if(err) { console.log(err) }
    console.log(`Server started on port ${port}`)
})

// Database Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// Use connect method to connect to the server
MongoClient.connect(url, (err, db)=>{
  console.log("Connected successfully to mongodb server")
  db.close()
})