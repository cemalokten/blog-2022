import express from "express";
import router from "./routes";

const app = express();

const port = 3000;
const hostname = "localhost";

app.use("/api", router);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

app.listen(3000);
