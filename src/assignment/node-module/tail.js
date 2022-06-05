

const _ = require('lodash');



const taily = function(){
    const OddArr = [1,3,5,7,9,11,13,15,17,19];
    const newtail = _.tail(OddArr)


    console.log(newtail)

    
 }
 
 module.exports.myTail= taily
 
 
 
 
 
 // Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.