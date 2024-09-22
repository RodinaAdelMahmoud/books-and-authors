import express from "express";
import* as BC from "./book.controller.js";
import { asyncHandler } from './../../middleware/asyncHandler.js';

const router = express.Router();

router.post("/",BC.createBook);

router.get("/",BC.allBooks)
router.get("/search",asyncHandler(BC.searchBook))
router.get("/:id",asyncHandler(BC.singleBook))


router.patch("/:id",asyncHandler(BC.updateBook))
router.delete("/:id",asyncHandler(BC.deleteBook))


export default router