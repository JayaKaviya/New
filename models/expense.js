const mongoose=require('mongoose'); 
const expenseSchema= new mongoose.Schema({ 
    amount: Number, 
    desc: String, 
    title: String,
}); 

const Expense=mongoose.model('Expense',expenseSchema) 
module.exports=Expense; 


//In MVC - this is model.. That is defining schema and exporting to use everywhere 
//Model name noun ah tha irukum,capital la than irukum