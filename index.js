import express from "express";
import connectionDb from "./db/connection.js";
import * as routers from "./src/modules/index.routes.js"; 

const app = express()
const port = 8000
app.use(express.json())

app.use("/book",routers.bookRouter)
app.use("/author",routers.authorRouter)

connectionDb()

app.use('*', (req, res, next) => {
  res.status(404).json({ msg: "Route not found" });
  });
  
  
  
  app.listen(port, () => console.log(`Server is running on port ${port}`));
  