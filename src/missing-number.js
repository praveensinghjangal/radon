// let b= [];
// let a= [33,34,35,37,38,39];
// let result = 0;
// for(i=0; i<a.length; i++){
//     result = result + a[i];
//     let c = result.push(b);
//     console.log(c);

// }

// module.export.f= c









// const missingNumber1 = function(){
  
//     let arr = [1,2,3,5,6,7];
//     let result = [];

//     let minNum = Math.min(...arr);
//     let maxNum = Math.max(...arr);

    

//         for (let i= minNum; i<maxNum; i++) {
//             if(arr.indexOf(i) < 0) {
//               result.push(i); 
//             }
            
//             console.log(result)
//         }
// }





const missingNumber2 = function(){
  
    let arr = [33, 34, 37, 38];
    let result = [];

    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);

    

        for (let i= minNum; i<maxNum; i++) {
            if(arr.indexOf(i) < 0) {
              result.push(i); 
            }
            
            console.log(result)
        }
}


module.exports.missingNumber2= missingNumber2