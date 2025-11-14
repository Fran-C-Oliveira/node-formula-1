import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const teams = [
    { id: 1, name: "ferrari" },
    { id: 2, name: "mercedes" },
    { id: 3, name: "red bull racing" },
];

const drivers = [
    { id: 1, name: "lewis hamilton", team: "mercedes" },
    { id: 2, name: "max verstappen", team: "red bull racing" },
    { id: 3, name: "charles leclerc", team: "ferrari" },
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
});

server.get("/drivers/:id", async (request, response) => {
    const { id } = request.params as { id: string };
    const driver = drivers.find((driver) => driver.id === parseInt(id));
    if (driver) {
        response.type("application/json").code(200);
        return { driver };
    } else {
        response.type("application/json").code(404);
        return { message: "Driver not found" };
    }
});

const start = async () => {
  try {
    await server.listen({ port: 3333 });
    console.log("Server is running on http://localhost:3333");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();    