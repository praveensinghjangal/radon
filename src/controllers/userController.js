const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBook= async function (req, res) {
    let allBooklist= await UserModel.find()
    res.send({msg: allBooklist})
}

module.exports.createBook=createBook
module.exports.getBook= getBook
