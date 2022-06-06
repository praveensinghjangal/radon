const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
   
bookName: String,
authorName: String,
category: String,
year: Number,
id: Number

}, { timestamps: true });

module.exports = mongoose.model('Book', userSchema) //users



// String, Number
// Boolean, Object/json, array