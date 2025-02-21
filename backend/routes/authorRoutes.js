import express from "express";
import { getAuthors, updateAuthorOfTheMonth } from "../controllers/authorController.js";


const router = express.Router();

router.get("/authors", getAuthors);
router.put("/authors", updateAuthorOfTheMonth);


export default router;
