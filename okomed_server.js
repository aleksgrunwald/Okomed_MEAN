const express = require('express')

const app = express()
const port = 2000

const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

let DBConnection = require('./lib/dbConnection')


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
        app.use('/static', express.static(__dirname + '/static'))
        app.use(favicon(__dirname + '/static/img/favicon.ico'))
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())   
    }

    connectToDB() {
        DBConnection.openDB()
    }

    initRoutes() {
        app.get('/', (req, res) => {
            res.send("OKOMED hey")
        })
    }
}


let server = new Server()




