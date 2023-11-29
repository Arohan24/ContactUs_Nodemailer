require('dotenv').config({ path: './config.env' });
const express=require('express');
const {dbConnect}=require('./dbConnect');
const cors=require('cors');
const router=require('./router/routes.js')
const app=express();

// Assign environment variables to constants
const port = process.env.PORT ;
const DBurl= process.env.MongoDB_URL;


//Database Connection
dbConnect(DBurl);


//Middlewares
app.use(express.json());
app.use(cors());
app.use('/api',router);


app.get("/",(req,res) => {
  res.json({message:`The Server is running on Port ${port}`});
})


app.listen(port,() => {
    console.log(`The Server is running on Port ${port}`);
}); 