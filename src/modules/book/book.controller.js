import bookModel from "../../../db/models/book.model.js"





// ============ CREATE BOOKS==============


export const createBook = async(req,res,next) =>{
    const { title , content, author , date} = req.body

    if(!title || !content || !author ){
        return res.status(400).json("Please fill all the details")
    }
        
const newBook = await bookModel.create({
    title,
    content,
    author,
    date
})
return res.status(201).json({msg:"done"})

  
}

// ============GET ALL BOOKS==============
export const allBooks = async(req,res,next)=>{


    const books = await bookModel.find()
    return res.status(200).json(books)
}

// ============GET SINGLE BOOK==============
export const singleBook = async (req, res, next) => {
    const { id } = req.params; 
    const book = await bookModel.findById(id);
  
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
  
    return res.status(200).json(book);
};


// ============UPDATE BOOK==============
export const updateBook = async(req,res,next)=>{
const {title,content,author,date} = req.body

    const books = await bookModel.findByIdAndUpdate(req.params.id)

    if(!books){
        return res.status(404).json({msg:"Book not found"})
    }

    books.title = title
    books.content = content
    books.author = author
    books.date = date   

    await books.save()


    return res.status(200).json(books)
}

// ============delete BOOK==============
export const deleteBook = async (req, res, next) => {
    const book = await bookModel.findByIdAndDelete(req.params.id);
  
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }
  
    return res.status(200).json({ msg: "Book deleted successfully" });
  };
  



  
//   ===========search book==============
export const searchBook = async (req, res, next) => {
    const { title, author } = req.query;
  
    const query = {};
    if (title) {
      query.title = { $regex: title, $options: 'i' };
    }
  
    if (author) {
      query.author = { $regex: author, $options: 'i' }; 
    }
  
    const book = await bookModel.find(query);
  
    if (book.length === 0) {
      return res.status(200).json({ msg: "No books found" });
    }
  
    return res.status(200).json({ msg: "Books retrieved successfully", book });
  };
  