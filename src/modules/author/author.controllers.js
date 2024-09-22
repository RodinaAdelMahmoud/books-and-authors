import authorModel from "../../../db/models/author.model.js"
import bookModel from "../../../db/models/book.model.js";


// ===========ADD AUTHOR==============
export const addAuthor = async (req, res, next) => {
    const { name, bio, books, birthDate } = req.body;
  
    const author = await authorModel.create({ name, bio, books, birthDate });
  
    return res.status(201).json({ msg: "Author created successfully", author });
  };


  
// ===========get AUTHOR==============
export const getAuthor = async (req, res, next) => {
  
    const author = await authorModel.find();
  
    return res.status(201).json({ msg: "done", author });
  };
  


// ===========single AUTHOR==============
export const singleAuthor = async (req, res, next) => {
  
    const author = await authorModel.findById(req.params.id);   
  
    if(!author){
        return res.status(404).json({ msg: "Author not found" });
    }
    return res.status(201).json({ msg: "done", author });

  };
  
// ===========update AUTHOR==============
export const updateAuthor = async (req, res, next) => {
  const {name, bio, books, birthDate} = req.body;
    const author = await authorModel.findByIdAndUpdate(req.params.id);   
  
    if(!author){
        return res.status(404).json({ msg: "Author not found" });
    }
author.name = name 
author.bio = bio
author.books = books
author.birthDate = birthDate

    await author.save();

    return res.status(201).json({ msg: "done", author });

  };

  
// ===========delete AUTHOR==============
export const deleteAuthor = async (req, res, next) => {

    const author = await authorModel.findByIdAndDelete(req.params.id);   
  

    if(!author){
        return res.status(404).json({ msg: "Author not found" });
    }


    return res.status(201).json({ msg: "done" });

  };


// ===========get all ==============
export const getAll = async (req, res, next) => {

    const authors = await authorModel.find(); 
    const  books = await bookModel.find();  
  

    if(!authors || !books){
        return res.status(404).json({ msg: "Author or book not found" });
    }


    return res.status(201).json({ msg: "done" ,authors,books});


  };
  
//   ===========search AUTHOR==============
  export const search = async (req, res, next) => {
    const { name, bio } = req.query;
  
    const query = {};
    if (name) {
      query.name = { $regex: name, $options: 'i' }; 
    }
  
    if (bio) {
      query.bio = { $regex: bio, $options: 'i' }; 
    }
  
    const authors = await authorModel.find(query);
  
    if (authors.length === 0) {
      return res.status(200).json({ msg: "No authors found" });
    }
  
    return res.status(200).json({ msg: "Authors retrieved successfully", authors });
  };


  
//   ===========books by AUTHOR==============

  export const booksByAuthor = async (req, res, next) => {
    const { id } = req.params;

    const author = await authorModel.findById(id).populate('books');
  
    if (!author) {
      return res.status(404).json({ msg: "Author not found" });
    }
  
    return res.status(200).json({ msg: "Author retrieved successfully", author });
  };
  

  

  
  

