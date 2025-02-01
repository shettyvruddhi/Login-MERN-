const mongoose=require('mongoose');

const mongo_url=process.env.DB;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=>{
        console.log('MongoDB Connected Error...',err);
    })