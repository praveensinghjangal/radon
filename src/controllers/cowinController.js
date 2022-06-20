let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getlondontemp = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=3e62cb7b096437af5eebfbc014b5de0b`
        }
        let result = await axios(options)
        let a=result.data
        let temp = a.main.temp
        console.log(temp) 
        res.status(200).send({ msg: temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let gettempsort = async function (req, res) {
    try {
        let cities= [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let b=[]
    for(i=0; i<=cities.length; i++){
        let obj={ city: cities[i]}
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=cities[i]&appid=3e62cb7b096437af5eebfbc014b5de0b`
        }
        let result = await axios(options)
        obj.temp= result.data.main.temp
        b.push(obj)
    }
       
        let sorted= b( function(a,b){ return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status:true, data:sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let postmeme = async function (req, res) {
    try {
        
       
        var options = {
            method: "post",                                               
             
            url: `https://api.imgflip.com/caption_image?template_id=129242436&text0=OOpshowCommonSenseisnotsoCommon&username=chewie12345&password=meme@123`
           
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}                                               
 
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getlondontemp = getlondontemp
module.exports.gettempsort = gettempsort
module.exports.postmeme = postmeme