const express=require('express');
const app=express();
const mongoose=require('mongoose');
const mongourl='mongodb://localhost:27017/bookstore';
const cors=require('cors');
app.use(cors())
app.use(express.json())
const bookRoute=require('./Routers/userRouter');

app.use('/books',bookRoute);

mongoose.connect(mongourl)
.then(()=>{
    app.listen(3000,()=>{
        console.log('listening')
    })
})
.catch((err)=>{
    console.log(err);
})