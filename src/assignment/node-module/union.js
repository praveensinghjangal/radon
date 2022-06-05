const _ = require('lodash');

const myUnion = function(){
    const arr1 = [1,2,2,2,3,4,5]
    const arr2 = [1,2,2,2,3,4,5]
    const arr3 = [1,2,2,2,3,4,5]
    const arr4 = [1,2,2,2,3,4,5]
    const arr5 = [1,2,2,2,3,4,5]

    const newunion=_.union(arr1,arr2,arr3,arr4,arr5)
    console.log(newunion);
   
}
 
module.exports.union= myUnion




