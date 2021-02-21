import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index";
import dotenv from "dotenv";
import cluster from "cluster";
import os from "os";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
dotenv.config();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "one gov api",
    status: "success",
  });
});

app.use("/api/v1", router);

const PORT = process.env.PORT || 4200;

if (cluster.isMaster && !process.env.NODE_ENV == "test") {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
    console.log(`Worker ${process.pid} started`);
  });
}
