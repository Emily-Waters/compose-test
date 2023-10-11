import express from "express";

async function main() {
  const app = express();

  app.use(ErrorHandlingMiddleware);

  app.get("/", (req, res) => {
    console.log("GET /");
    res.end();
  });

  app.listen(8080, () => {
    console.log("listening on port 8080");
  });
}

main();

function ErrorHandlingMiddleware(err: any, req: any, res: any, next: any) {
  if (res.headersSent) return next(err);

  console.error(err);
  res.end(500);
}
