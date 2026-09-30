import { Router } from "express";

import {
    getAsignatura,
    getAsignaturaById, 
    getAsignaturaReview,
    createAsignatura, 
    updateAsignatura, 
    deleteAsignatura} from "../controller/asignatura.controller.js"

const router = Router();

router.get("/asignatura", getAsignatura);

router.get("/asignatura/:id", getAsignaturaById);

router.post("/asignatura", createAsignatura);

router.put("/asignatura/:id", updateAsignatura);

router.delete("/asignatura/:id", deleteAsignatura);

router.get("/asignatura/:id/reviews", getAsignaturaReview);

export default router;