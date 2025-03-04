import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bio:{
        type:String,
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books', 
      }],
    birthDate:{
        type:Date,
    }
    
})
const authorModel = mongoose.model("authors",authorSchema)

export default authorModel;