export interface Project {
  id: number;
  name: string;
  description: string;
  status?: "pending" | "in-progress" | "completed";
}

export let projects: Project[] = [
  { id: 1, name: "Plataforma Educativa", description: "Sistema de cursos online", status: "in-progress" }
];
