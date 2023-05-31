const { json } = require("express");

const joiValidation = (schema) => {  //make input as schema so we can valid both register and login without create 2 different files
    return async (req, res, next) => {
        const param = JSON.parse(req.body);
        try{
            const body = param;
            await schema.validateAsync(body);
        }catch(err){
            return res.json({
                success: false,
                err: err
            })
        }
        next();
    }
}

module.exports = {
    joiValidation
}


//this is originally a port of folder routes in index file
//as it validate if we should accept input data or not and we divide it to 2 part because we want to make code clean

//if we donot want to create many middleware we have 1 solution
//as in code 