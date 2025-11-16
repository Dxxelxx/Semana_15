const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Proyecto API - People, Projects y Tasks",
    version: "1.0.0",
    description: "Documentación generada con Swagger"
  },
  servers: [{ url: "http://localhost:3000/api/v1" }],
  tags: [
    { name: "People", description: "Gestión de personas" },
    { name: "Projects", description: "Gestión de proyectos" },
    { name: "Tasks", description: "Gestión de tareas" }
  ],
  paths: {
    "/projects": {
      get: {
        tags: ["Projects"],
        summary: "Listar todos los proyectos",
        responses: { "200": { description: "Lista de proyectos" } }
      },
      post: {
        tags: ["Projects"],
        summary: "Crear un proyecto",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  description: { type: "string" }
                },
                required: ["name", "description"]
              }
            }
          }
        },
        responses: { "201": { description: "Proyecto creado" } }
      }
    },
    "/projects/{id}": {
      get: {
        tags: ["Projects"],
        summary: "Obtener un proyecto por ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
        responses: {
          "200": { description: "Proyecto encontrado" },
          "404": { description: "Proyecto no encontrado" }
        }
      },
      put: {
        tags: ["Projects"],
        summary: "Actualizar un proyecto (solo nombre)",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { type: "object", properties: { name: { type: "string" } } } }
          }
        },
        responses: { "200": { description: "Proyecto actualizado" }, "404": { description: "Proyecto no encontrado" } }
      },
      delete: {
        tags: ["Projects"],
        summary: "Eliminar un proyecto",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
        responses: { "200": { description: "Proyecto eliminado" }, "404": { description: "Proyecto no encontrado" } }
      }
    }
  }
};

export default swaggerDocument;
