import { projects, Project } from "./project.model";

export class ProjectService {
  getAll(): Project[] {
    return projects;
  }

  getById(id: number): Project | undefined {
    return projects.find(p => p.id === id);
  }

  create(data: Pick<Project, "name" | "description">) {
    const newProject: Project = {
      id: projects.length ? projects[projects.length - 1].id + 1 : 1,
      ...data,
    };
    projects.push(newProject);
    return newProject;
  }

  update(id: number, name: string) {
    const project = projects.find(p => p.id === id);
    if (!project) return null;
    project.name = name;
    return project;
  }

  remove(id: number) {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return false;
    projects.splice(index, 1);
    return true;
  }
}

