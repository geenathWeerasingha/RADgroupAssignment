const mongoose = require("mongoose");

const DB = "mongodb+srv://weer12345:12345@cluster0.wybtkkr.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));