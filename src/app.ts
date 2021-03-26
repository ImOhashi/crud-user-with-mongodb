import express from "express";
import { config } from "dotenv";

import routes from "./routes";
import database from "./database/connect";
import { morganMiddleware } from "./helpers";

class App {
  public app: express.Application = express();

  constructor() {
    config();
    
    database.connect();

    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(morganMiddleware);
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
