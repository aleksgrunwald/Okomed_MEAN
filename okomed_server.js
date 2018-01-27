let express = require('express')

let app = express()


app.get('/', (req, res) => {
    res.send("OKOMED hey")
})

app.use('/static', express.static(__dirname + '/static'))
// app.use(require('./controllers'))


var server = app.listen(2000, () => 
    console.log('Server is listening on 2000 port')
)



