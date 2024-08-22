const express=require('express');
const app=express();
const cors= require('cors');
const port=3001;
const host='localhost';
const mongoose=require('mongoose');
const router=require('./router')

app.use(cors());
app.use(express.json());

const uri=''

const connect=async()=>{
    try{
       await mongoose.connect(uri);
       console.log('Connected to mongodb');
    }
    catch(e){
        console.log('Mongodb Error:', e)

    }
};

connect();

const server=app.listen(port,host, ()=>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api',router);