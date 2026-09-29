import { Router } from "express";

import {
    getAsignatura, 
    createAsignatura, 
    updateAsignatura, 
    deleteAsignatura} from "../controller/asignatura.controller.js"

const router = Router();

router.get("/asignatura", getAsignatura);

router.post("/asignatura", createAsignatura);

router.put("/asignatura/:id", updateAsignatura);

router.delete("/asignatura/:id", deleteAsignatura);


export default router;