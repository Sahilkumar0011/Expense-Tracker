const userModel = require("../models/userModel")




// creating LOGIN controller
const loginController = async(req, res)=>{
    try {
      const {email,password}= req.body
      const user= await userModel.findOne({email,password})
      if(!user) {
      return res.status(404).send('something went wrong')
      }
      res.status(201).json({
        success:true,
        user
      })
    } catch (error) {
      res.status(400).json({
        success:false,
        error
      })
    }
    
}

// creating REGISTER controller
const registerController = async(req,res)=>{
    try {
      const newUser= new userModel(req.body)
      await newUser.save()
      res.status(201).json({
        success:true,
        newUser
      })
    } catch (error) {
      res.status(400).json({
        success:false,
        error
      })
    }
}


// exporting the controllers
module.exports={loginController,registerController}