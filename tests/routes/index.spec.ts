import supertest from "supertest";

import app from "../../src/app";

describe("Route /details", () => {
  test("Get route details", async () => {
    const expectedBody = {
      version: process.env.npm_package_version,
      author: process.env.npm_package_author_name,
      email: process.env.npm_package_author_email,
      repositoryUrl: process.env.npm_package_repository_url,
    };

    const response = await supertest(app).get("/details");

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedBody);
  });
});
