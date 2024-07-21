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
async function handleDeleteEmployee(req,res){
    try {
        const deletedUser = await USER.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
      } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    
}

module.exports = {
    handleGetAllEmoployees,
    handleCreateNewEmployee,
    handleDeleteEmployee
}