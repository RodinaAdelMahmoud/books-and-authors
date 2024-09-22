import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "authors",
        required: true
      },
    date:{
        type:Date,
        default:Date.now
    }
    
})
const bookModel = mongoose.model("books",bookSchema)

export default bookModel;