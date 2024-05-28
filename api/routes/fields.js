import express from "express";
import { countByCity,
     countByType, 
     createField, 
     deleteField, 
     getField, 
     getFields, 
     getFieldsByType, 
     updateField } from "../controllers/field.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/",createField);

//UPDATE
router.put("/:id",verifyAdmin,updateField);

// //DELETE
router.delete("/:id",deleteField);

// //GET
router.get("/v1/:id", getField);

// //GET ALL
router.get("/",getFields);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/type", getFieldsByType);

export default router;

