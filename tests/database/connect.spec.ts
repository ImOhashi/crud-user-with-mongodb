import database from "../../src/database/connect";
import { DatabaseError } from "../../src/errors";

describe("Test Mongo connection", () => {
  test("Should return throw database error", () => {
    try {
      database.connect();
    } catch (error) {
      expect(error).toThrowError(DatabaseError);
    }
  });
});
