const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
   
    name: String,
	balance: Number,  
	address: String,
	age: Number,
 	gender: {String,
	 enum: ["male", "female", "Others"]
	},
    // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: Boolean // Default false value.
}
, { timestamps: true });

module.exports = mongoose.model('user', userSchema) //users



// String, Number
// Boolean, Object/json, array