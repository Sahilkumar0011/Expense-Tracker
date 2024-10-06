const mongoose= require("mongoose")
const colors=require('colors')
const connectdb = async () => {
      try {
        await mongoose.connect(process.env.MONGO_URL || config.connectionString)
        console.log(`server is running on ${mongoose.connection.host}`.bgBlue);
        
      } catch (error) {
        console.log(`${error}`.bgRed.white);
        
      }
}

module.exports= connectdb