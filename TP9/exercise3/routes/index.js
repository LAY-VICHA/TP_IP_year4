//for use route
var express = require('express');
const jwt = require('jsonwebtoken')
var router = express.Router();

const { login } = require('../service/login');
const { register } = require('../service/register')
const { logout } = require('../service/logout')
const { getUser } = require('../service/getUser')
const { joiValidation } = require('../middleware/joiValidation');
const { loginSchema, registerSchema } = require('../schemas/index')
const {ensureSignedIn, ensureSignedOut} = require('../middleware/auth');

//home page 
router.get('/', function(req,res,next) {
    console.log("router up");
    res.send("Hello, this is API");
});
//login page
router.post('/login', ensureSignedOut ,joiValidation(loginSchema) ,async function(req,res,next) {
    const param = JSON.parse(req.body);
    const {email, password} = param;
    const result = await login(email, password);    //login by check email and password
    const token = jwt.sign(param, "t0kenEncrypti0n"); //signing token 
    req.session.jwtToken = token;       //store token in session?
    res.json(result);
});
//register page
router.post('/register', ensureSignedOut, joiValidation(registerSchema), async function(req,res,next) {
    const param = JSON.parse(req.body);
    const result = await register(param);
    res.json(result);
});
//logout page
router.post('/logout', ensureSignedIn, function(req, res, next){
    const result = logout(req.session);
    console.log("cookie", req.cookies);
    res.clearCookie('token')
    res.json(result);
})
//get user by id
router.get('/user/:id', ensureSignedIn, async function(req, res, next){
    var userId = req.path.split("/user/")[1]
    result = await getUser(userId)
    return res.json(result)
})
module.exports = router;