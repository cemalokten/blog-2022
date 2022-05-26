import express from "express";
import helmet from "helmet";
import router from "./routes";
import morgan from "morgan";

const app = express();

const port = 5000;
const hostname = "localhost";

app.use(helmet());
app.use(morgan("tiny"));
app.use("/api", router);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

app.listen(port);
