import express from "express";
import* as AC from "./author.controllers.js";
import { asyncHandler } from './../../middleware/asyncHandler.js';

const router = express.Router();

router.post("/",asyncHandler(AC.addAuthor));

router.get("/",asyncHandler(AC.getAuthor))
router.get("/all",asyncHandler(AC.getAll))
router.get("/:id",asyncHandler(AC.booksByAuthor))
router.get("/search",asyncHandler(AC.search))
router.get("/:id",asyncHandler(AC.singleAuthor))
router.patch("/:id",asyncHandler(AC.updateAuthor))
router.delete("/:id",asyncHandler(AC.deleteAuthor))


export default router