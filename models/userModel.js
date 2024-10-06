const mongoose= require('mongoose')

// schema create
const userSchema= new mongoose.Schema({
       name:{
        type:String,
        required:[true, 'name is required']
       },
       email:{
        type:String,
        required:[true, 'name is required and unique'],
        unique:true,
       },
       password:{
        type:String,
        required:[true, 'password is required']
       },
       

},{timestamps:true});
// export

module.exports = mongoose.model('user',userSchema)