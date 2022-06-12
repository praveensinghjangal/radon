const UserModel= require("../models/userModel")




const basicCode= async function(req, res, next) {
  let currentdate= new Date();
  let dates=  "Last Sync: " +currentdate.getDate() + "/" 
               +(currentdate.getMonth()+1)  + "/" 
               +currentdate.getFullYear() + "@" 
               +currentdate.getTime() + "!" 
               +currentdate.getMinutes() + "!" 
               +currentdate.getSeconds();

    let ip= req.ip
    let url=req.originalUrl
   console.log( dates, ip, url)
   next()
}
module.exports.basicCode= basicCode
















