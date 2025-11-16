import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger.config";
import projectRoutes from "./projects/project.routes";


const app = express();
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas Projects
app.use("/api/v1/projects", projectRoutes);

// root
app.get("/", (_req, res) => {
  res.send("API running. Swagger UI -> /api-docs");
});

export default app;
