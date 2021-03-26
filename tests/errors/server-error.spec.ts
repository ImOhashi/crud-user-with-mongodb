import { ServerError } from "../../src/errors";

describe("Test Server Error", () => {
  test("Should test server exception", () => {
    expect(() => {
      throw new ServerError();
    }).toThrow(ServerError);
  });
});
