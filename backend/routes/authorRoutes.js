import express from "express";
import { getAuthors, updateAuthorOfTheMonth } from "../controllers/authorController.js";
import { loginUser, registerUser } from "../controllers/authController.js";


const router = express.Router();

router.get("/authors", getAuthors);
router.put("/authors", updateAuthorOfTheMonth);
router.post("/register", registerUser);
router.post("/login", loginUser);


export default router;
