const express =require("express");
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require("../controllers/transactionCtrl");


// router creation
const router = express.Router()


// Routes
// add transation post method
router.post('/add-transaction',addTransaction)
// Edit transation post method
router.post('/edit-transaction',editTransaction)
// Edit transation post method
router.post('/delete-transaction',deleteTransaction)

// get all transctions get method
router.post('/get-transaction',getAllTransaction)


// export router
module.exports= router;