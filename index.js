const express = require('express')
const mongoose=require('mongoose');
const app = express()

const port = process.env.PORT || 3000
const bodyParser=require('body-parser') 

const Expense=require('./models/expense') 

mongoose.connect('mongodb+srv://jayakaviyaofficial:jayakaviya@cluster0.qjqxu0f.mongodb.net/newDb?retryWrites=true&w=majority',{ 
  useUnifiedTopology : true, 
 
});

// oru url ku get,post,put nu elamey podalam.. orey url ku 2 get varathu / collection should be in plural form becoz mongodb convert evrythng into plural

app.get('/expense', async(req, res) => {
  const result=await Expense.find()
  res.send(result); 
 }) 


//to get particular id  
// app.get('/expense/:id', async(req, res) => {  
//   console.log(req.params); // 
//   res.send(req.params); 
// }) 


//to get info using id
// app.get('/expense/:id', async(req, res) => {  
//   try{
//   const id=req.params.id;
//   const result=await Expense.findById(id); 
//   if(result)
//     res.send(result); 
//   else
//     res.send("No Expense with that id"); 
//   }
//   catch(err){ 
//     res.send(err);
//   }
// }) 


//delete using id
// app.delete('/expense/:id', async(req, res) => {  
//   try{
//   const id=req.params.id;
//   const result=await Expense.findByIdAndDelete(id); 
//   if(result)
//     res.send(result); 
//   else
//     res.send("No Expense with that id"); 
//   }
//   catch(err){ 
//     res.send(err);
//   }
// }) 


//middleware ,req body la json format matum accept panum 
app.use(express.json()) 

//TO ADD data into the db by using post api by entering data in body as json format 
//to create data 
app.post('/expense',async(req, res) => { 
    console.log(req.body); 
    const newExpense=req.body; 
    await Expense.create(newExpense);
    res.send('<h1>Hai World!</h1>'); 
   
  }) 


//   app.put('/expense/:id',async(req, res) => { 
    
//         const id=req.params.id;
//         const updateObject=req.body; 
//         const updatedObject=await Expense.findByIdAndUpdate(id,{$set:updateObject},{new:true}) 
//         res.send(updatedObject);
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
