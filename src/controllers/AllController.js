const { count } = require("console")
const productModel= require("../models/productModel")
const OrderModel= require("../models/OrderModel")
const userModel= require("../models/userModel")

const createproduct= async function (req, res) {
    let data = req.body
    let savedData= await productModel.create(data)
    res.send({data: savedData})
}
const createuser= async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
   res.send({msg: savedData})
   }



//    const createOrder= async function (req, res) {
//     let savedData= await OrderModel.find().populate(['userId', 'productId'])
//    res.send({msg: savedData})
//    }
const createOrder= async function(req,res) {
    console.log("Hello World");
    let order= req.body
    let userId= order.uderId
    let productId= order.productId

    if(!userid) return res.send("UserId Exist");
     let user= await userModel.findById(userid)
     if(!user) return res.send(' The request is not valid No user exist')
    
     if(!productId) return res.send("ProductId Must be Present");

     let product = await productModel.findById(productId)
     if(!product) return res.send("The request is not valid No product exist")

}



// module.exports.createOrder= createOrder
module.exports.createuser= createuser
module.exports.createproduct= createproduct
module.exports.createOrder= createOrder

