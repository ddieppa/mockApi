import jsonServer from "json-server"
import mockData from "./mockData/index"

const server = jsonServer.create();
const router = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
