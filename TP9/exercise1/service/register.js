const users = require('../models/users')

const register = async (param) => {
    const {email, username, firstname, lastname, password } = param;
    
    try{
        var existed = await users.findOne({ email })
        if(existed){
            throw "Email is already used"; //if error, it will be thrown to catch, so the error display in catch
        }
        existed = await users.findOne({ username })
        if(existed){
            throw "username is already used"
        }

        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password
        }

        const createUser = await users.create(newUser)

        return {
            success: true,
            data: createUser
        }
    }catch(err){
        return {
            success: false,
            err: err || 'error' //the reason we have 2 option becuz we sometimes it might be error from "try"
        }
    }
}

module.exports = {
    register
}