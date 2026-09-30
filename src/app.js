import express from "express";
import usuarioRoutes from "./routes/usuario.routes.js"
import reviewRoutes from "./routes/review.routes.js"
import asignaturaRoutes from "./routes/asignatura.routes.js"

const app =express();
app.use(express.json());
app.use(usuarioRoutes);
app.use(reviewRoutes);
app.use(asignaturaRoutes);

export default app;
