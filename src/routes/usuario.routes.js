import { Router } from "express";

import {
    getUsuario,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuarioReview } from "../controller/usuario.controller.js"

const router = Router();

router.get("/usuario", getUsuario);

router.get("/usuario/:id", getUsuarioById);

router.post("/usuario", createUsuario);

router.put("/usuario/:id", updateUsuario);

router.delete("/usuario/:id", deleteUsuario);

router.get("/usuario/:id/reviews", getUsuarioReview);

export default router;