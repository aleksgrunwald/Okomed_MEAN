const express = require('express')

const app = express()
const port = 2000

const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

let DBConnection = require('./lib/dbConnection')
let messageController = require('./controllers/controller_messages')


class Server {

    constructor() {
        this.start()
        this.initExpressMiddleware()
        this.connectToDB()
        this.initRoutes()
}

    start() {
        app.listen(port, () => 
            console.log('Server is listening on 2000 port')
        )
    }

    initExpressMiddleware() {
        app.use('/img', express.static(__dirname + '/public/img'))
        app.use('/', express.static(__dirname + '/public/dist'))
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json()) 
        app.use(favicon(__dirname + '/public/img/favicon.ico'))  
    }

    connectToDB() {
        DBConnection.openDB()
    }

    initRoutes() {
        new messageController(app)
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/public/dist/index.html')
        })
    }
}


let server = new Server()




