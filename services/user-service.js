const {userModel}  = require("../models")

exports.userRegister = async (req) => {
    const { query, params, body } = req
    const { name, email, job, username } = body

    if (!name) throw new Error("NAME NOT present");
    if (!job) throw new Error("job NOT present");
    if (!email) throw new Error("email NOT present")
    if (!username) throw new Error("username NOT present");

    return await userModel.create({
        name,
        email,
        username,
        job
    })
    

}

exports.findUsers = async (req)=> {
    const job = req.query.job
    let criteria= {};

    if(job){
        criteria.job= job;
    }

    console.log("hi")
    return await userModel.find(criteria)
     
} 

