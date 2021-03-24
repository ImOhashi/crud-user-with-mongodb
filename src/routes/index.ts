import { Request, Response, Router } from "express";

class Routes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  setRoutes(): void {
    this.router.get("/details", (req: Request, res: Response) => {
      return res.status(200).json({
        version: process.env.npm_package_version,
        author: process.env.npm_package_author_name,
        email: process.env.npm_package_author_email,
        repositoryUrl: process.env.npm_package_repository_url,
      });
    });
  }
}

export default new Routes().router;
