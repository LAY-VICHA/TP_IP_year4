var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var session = require('express-session')
var cookieParser = require('cookie-parser')

var app = express()
const port = 3001;
const oneHour = 1000*60*60;

app.use(session({
    secret: "SecretKeyIsEnCrypt",
    saveUninitialized: true,
    cookie: {maxAge: oneHour},
    resave: false,
    name: "token"
}))
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

require('./config/db')()
app.use(require('./routes'));

app.listen(port, () => console.log(`App on http://localhost:${port}`));


//jwt: use to advoid if user already login, they can't login again
//our token needed to encrypted as well in order to prevent situation that people can see client's token and login?