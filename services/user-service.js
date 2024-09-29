const { userModel } = require("../models")


exports.userRegister = async (req) => {
    const { query, params, body } = req
    const {name, email, job ,username } = body

    // if(!name){
    //     throw new Error("NAME NOT present");
        
    // }
    if(!job){
        throw new Error("job NOT present");
        
    }
    if(!email){
        throw new Error("email NOT present");
        
    }
    if(!username){
        throw new Error("username NOT present");
        
    }

    const res = await userModel.create({
        name,
        email,
        username,
        job
    })
    console.log(name)
    console.log(email)
    console.log(body)
    console.log("query", query)
    console.log(params)

}