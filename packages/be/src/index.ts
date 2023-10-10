import express from "express";

async function main() {
  const app = express();

  app.use(express.static("../fe/public"));

  // app.get("/", (req, res) => {
  //   console.log("got /");
  //   res.end();
  // });

  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
}

main();
