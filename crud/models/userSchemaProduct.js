const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
        
    },
    model: {
        type: String,
        required: true,
        unique:true
    },
    weight: {
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const product = new mongoose.model("product",UserSchemaProduct);


module.exports = product;