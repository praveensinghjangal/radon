


const _ = require('lodash');

const fromPairs = function(){
const arr = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]


const newFromPairs = _.fromPairs(arr)
console.log(newFromPairs)




}

module.exports.fromPairs=fromPairs
                
