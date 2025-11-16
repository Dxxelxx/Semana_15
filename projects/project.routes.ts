import { Router } from "express";
import { ProjectService } from "./project.server";

const router = Router();
const service = new ProjectService();

router.get("/", (_req, res) => {
  res.json(service.getAll());
});

router.get("/:id", (req, res) => {
  const project = service.getById(Number(req.params.id));
  project
    ? res.json(project)
    : res.status(404).json({ message: "Proyecto no encontrado" });
});

router.post("/", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description)
    return res.status(400).json({ message: "Faltan datos del proyecto" });

  const newProject = service.create({ name, description });
  res.status(201).json(newProject);
});

router.put("/:id", (req, res) => {
  const updated = service.update(Number(req.params.id), req.body.name);
  updated
    ? res.json(updated)
    : res.status(404).json({ message: "Proyecto no encontrado" });
});

router.delete("/:id", (req, res) => {
  const deleted = service.remove(Number(req.params.id));
  deleted
    ? res.json({ message: "Proyecto eliminado" })
    : res.status(404).json({ message: "Proyecto no encontrado" });
});

export default router;
