//for use route
var express = require('express');
var router = express.Router();

const { login } = require('../service/login');
const { register } = require('../service/register'); // we have {} because we export register as object so it needed {} unlike other export

//home page 
router.get('/', function(req,res,next) {
    console.log("router up");
    res.send("Hello, this is API");
});
//login page
router.post('/login', async function(req,res,next) {
    const param =JSON.parse(req.body);
    const {email, password} = param;
    const result = await login(email, password);
    res.json(result);
});
//register page
router.post('/register', async function(req,res,next) {
    const param =JSON.parse(req.body); //what is body value here: value/information of from front-end
    const result = await register(param);
    res.json(result);
});

module.exports = router;