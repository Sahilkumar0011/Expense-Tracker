const express= require("express")
const morgan= require("morgan")
const cors= require("cors")
const dotenv= require("dotenv")
const colors= require("colors")
const path= require('path')
const connectdb = require("./config/connectdb")


dotenv.config()

connectdb()


const app = express()
const PORT = 8000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cors())



// user routes
app.use("/api/users", require("./routes/userRoutes"))

// transaction routes
app.use("/api/transactions", require("./routes/transactionRoutes"))

// static files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.listen(PORT,()=>{
  console.log(`server running on the port ${PORT}` );
  
}) 