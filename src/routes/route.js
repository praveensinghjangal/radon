const express = require('express');
const router = express.Router();
const autherController = require('../controllers/authorController');
const blogController = require('../controllers/blogController')
const mw = require('../middleware/auth1&auth2')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



//API for Create Auther
router.post('/authors', autherController.createAuthor )                     
 router.post('/blogs', mw.authentication, mw.authorizationBody, blogController.createBlog )         //auth //auth

 router.get('/getBlog',  mw.authentication, blogController.getBlogs )                        //auth
 router.put('/updateblog/:blogId',mw.authentication, mw.authorizationParams, blogController.updateBlog )              //auth //auth              
 router.delete('/delete', mw.authentication, mw.authorizationParams,blogController.deleteBlogByPath )                      //auth //auth

router.get('/login', autherController.authorLogin)




 router.delete('/deletequery',mw.authentication,mw.authorizationQuery, blogController.deleteBlogByQuery )           //auth //auth

module.exports = router;
// adding this comment for no reason