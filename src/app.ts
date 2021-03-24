import express from "express";
import morgan from "morgan";
import { config } from "dotenv";

import routes from "./routes";
import connect from "./database/connect";

class App {
  public app: express.Application = express();

  constructor() {
    config();
    connect();

    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(morgan("tiny"));
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: false,
      })
    );
    this.app.use(routes);
  }
}

export default new App().app;
