const USER = require('../models/user.model')

async function handleGetAllEmoployees(req,res){
    const allEmployees = await USER.find({})
    return res.json(allEmployees)
}
async function handleCreateNewEmployee(req,res){
    const body = req.body

  const result =  await USER.create({
        name:body.name,
        email:body.email,
        designation:body.designation,
        city:body.city,
    })

    return res.status(201).json({status:"User Created", id:result._id})
}

module.exports = {
    handleGetAllEmoployees,
    handleCreateNewEmployee
}