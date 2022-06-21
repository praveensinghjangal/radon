const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const blogsSchema = new mongoose.Schema( {
     title: {
        type: String,
        require: true
    }, 
     
    body: {
        type: String,
        require: true
    }, 
     
    authorId: {
    type: ObjectId,
    ref:'Author'
    },

    tags: [String, String,String, String,String, String], 
     
    category: {
        type: String,
        require: true
    }, 
          //  examples: [technology, entertainment, life style, food, fashion]},
     subcategory: [String, String ,String, String, String, String],
          //  examples[technology-[web development, mobile development, AI, ML etc]] },
     deletedAt: Date(), 
     isDeleted: {
        type:boolean,
        default: false
    }, 
     publishedAt: Date(), 
     isPublished: {
        type:boolean,
        default: false
    }},
         { timestamps: true });

module.exports = mongoose.model('blog', blogsSchema)