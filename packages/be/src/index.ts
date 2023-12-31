import express from "express";
import { ErrorHandlingMiddleware } from "./middleware";
import { sayHello } from "@engram-compose/utils";

async function main() {
  sayHello("backend");

  const app = express();

  app.use(ErrorHandlingMiddleware);

  app.get("/", (req, res) => {
    console.log("GET /");
    res.end();
  });

  app.listen(5000, () => {
    console.log("listening on port 5000");
  });
}

main();
