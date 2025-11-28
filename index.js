import express from "express";
import cors from "cors";
import { config } from "./utils/config.js";
import { logger } from "./lib/logger.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});     

// Run the server
app.listen(config.port, () => {
  logger.info(`Server running on port: ${config.port}`);
});