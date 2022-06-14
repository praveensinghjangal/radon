
const commonMiddlewares = function ( req, res, next) {
     let freeappuser= req.header.isFreeAppUser
     if(!freeappuser){res.send("isFreeAppUser is Misiing")}
    else{ 
        next()
    }}

   
    const commonMiddlewares1 = function ( req, res, next) {
        let freeappuser= req.header.isFreeAppUser
        if(!freeappuser){res.send("isFreeAppUser is Misiing")}
       else{ 
           next()
       }}
    



module.exports.commonMiddlewares= commonMiddlewares
module.exports.commonMiddlewares1= commonMiddlewares1
