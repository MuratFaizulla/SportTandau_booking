import express from "express";
import { countByCity, countByType, createField, deleteField, getField, getFields, getFieldsByType, updateField } from "../controllers/field.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// import { updatePlaygroundAvailability } from "../controllers/playground.js"

const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createField);

//UPDATE
router.put("/:id",verifyAdmin,updateField);

// //DELETE
router.delete("/:id",verifyAdmin,deleteField);

// //GET
router.get("/find/:id", getField);


// //GET ALL
router.get("/",getFields);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
// router.get("/playground/:id", getFieldPlaygrounds);

router.get("/type", getFieldsByType);


// router.put("/playground/availability/:id", updatePlaygroundAvailability);


export default router;

// getFieldsByType