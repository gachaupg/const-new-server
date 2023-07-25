import express from "express";
import { getTours } from "../controllers/product.js";



const router = express.Router();

router.get("/", getTours);


export default router