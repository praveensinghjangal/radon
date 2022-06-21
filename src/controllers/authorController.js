const authorModel = require('../models/authorModel')

const createAuthor = async function (req, res) {

    try {
        authordata = req.body
        finalData = await authorModel.create(authordata);
        res.send({ msg: finalData })
    }
    catch(error) {
        console.log("this is the error ", error.message)
        res.status(500).send({ msg: error.message })

    }
}

module.exports.createAuthor = createAuthor
