import { Router } from "express";

import {
    getUsuario, 
    createUsuario, 
    updateUsuario, 
    deleteUsuario, 
    getUsuarioReview } from "../controller/usuario.controller.js"

const router = Router();

router.get("/usuario", getUsuario);

router.post("/usuario", createUsuario);

router.put("/usuario/:id", updateUsuario);

router.delete("/usuario/:id", deleteUsuario);

router.get("/usuario/:id", getUsuarioReview);

export default router;