const express = require('express');
// const myHelper = require('../util/helper')
const jerry= require('../assignment/get-api/movies')
const lodash= require('lodash');
const callCab = require('../assignment/node-module/chunksarray')
const mytaily = require('../assignment/node-module/tail')
  const pollu = require('../assignment/get-api/movies')
  const tyler = require('../assignment/node-module/union')
  const dwarf = require('../assignment/node-module/frompairs')


const router = express.Router();

// chunkuarray
router.get('/chunky', function(req, res){
    const m=callCab.cab()
         console.log(m)
       
      
       res.send('done')
   })



//formpairs
router.get('/pairs', function(req, res){
 const v=dwarf.frompairs()
      console.log(v)
    
   
    res.send('done')
})

//myunion
router.get('/union', function(req, res){
    
    const z=tyler.union()
      console.log(z)                                                    
   
    res.send('done')
})

//mytail
router.get('/myTail', function(req, res){
    
    mytaily.myTail()                         
      
   
    res.send('done')
})


//getmovies-1question
router.get('/helloworld', function(req, res){
    
    const q=jerry.movies()
      console.log(q)
   
    res.send('done')
})





// 2nd question
router.get('/movies/:index', function (req, res) {                                                               
    let movies = ["Rang de basant", "The shining", "Lord of the rings", "Batman begins"]      
    console.log("Movie name is " + movies([req.params.index]-1))
    res.send(movies[req.params.index])
                                                                                             
})
// 4th question
router.get('/rest-me', function (req, res) {
    const b=pollu.fan()
    console.log(b)
    res.send(msg-b)

})

// 5th question
router.get('/films/:filmsid', function (req, res) { 
    const tom = [{
    'id': 1,           
    'name':  'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'                                  
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'  }]

   const a= tom[req.params.filmsid -1]
   console.log(a)
      //a.1         //4    =>     1<=4
   if(a.id <=  tom.length){
       res.send(a || "No movies exists with this id")

   }})

    
    



module.exports = router;
// adding this comment for no reason


