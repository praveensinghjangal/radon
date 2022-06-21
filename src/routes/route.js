const express = require('express');
const router = express.Router();
const autherController = require('../controllers/authorController');

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



//API for Create Auther
router.post('/authors', autherController.createAuthor )

module.exports = router;
// adding this comment for no reason