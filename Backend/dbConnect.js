const mongoose=require('mongoose');

async function dbConnect(url){
    mongoose.connect(url) 
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
      });
      
    mongoose.connection.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err);  
      });
}
module.exports={
    dbConnect
}

