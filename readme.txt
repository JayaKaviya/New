Refer : https://expressjs.com/en/starter/installing.html


In command prompt,inside expense_tracker folder, enter "npm init" .. enter the content what you want... enter yes to create package.json at first 

2nd step : terminal la  enter "npm install express".. package-lock.json,node_modules(all packages code will be there) will be created..
           "dependencies": {"express": "^4.18.2"} will be added in package.json 


3rd step: Create index.js - In https://expressjs.com/en/starter/hello-world.html , copy paste the "Hello world" program 


4th step : type in terminal "npm install mongoose" , package.json la dependencies la mongoose add airum 

5th step : add, const mongoose=require('mongoose'); 
                mongoose.connect('mongodb://localhost:27017/expensetracker',{ 
                     useUnifiedTopology : true
                }); 

6th step : create exense.js into models folder to create schema, 
           refer : https://mongoosejs.com/docs/guide.html
