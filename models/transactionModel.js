const mongoose=require('mongoose')

const taransactionSchema = new mongoose.Schema({

    userid:{
      type:String,
      required:true,
    },
    amount:{
      type:Number,
      required:[true,"Amount is required"]
    },
    category:{
      type:String,
      required:[true,"Category is required"]
    },
    type:{
      type:String,
      required:[true," is required"]
    },
    reference:{
      type:String,
    },
    description:{
      type:String,
      required:[true,"Description is required"]
    },
    date:{
      type:Date,
      required:[true,"Date is required"]
    },

},{timestamps:true})

const transactionModel=mongoose.model('transactions',taransactionSchema)

module.exports=transactionModel;