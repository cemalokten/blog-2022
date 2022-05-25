import express from "express";
import helmet from "helmet";
import router from "./routes";

const morgan = require("morgan");

const app = express();

const port = 3000;
const hostname = "localhost";

app.use(helmet());
app.use(morgan("tiny"));
app.use("/api", router);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

app.listen(3000);
