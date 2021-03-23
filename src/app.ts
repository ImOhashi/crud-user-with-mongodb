import express from "express";
import morgan from "morgan";
import { config } from "dotenv";

class App {
  public app: express.Application = express();

  constructor() {
    config();

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

    this.app.get("/details", (req, res) => {
      res.status(200).json({
        version: process.env.npm_package_version,
        author: process.env.npm_package_author_name,
        email: process.env.npm_package_author_email,
        repositoryUrl: process.env.npm_package_repository_url,
      });
    });
  }
}

export default new App().app;
