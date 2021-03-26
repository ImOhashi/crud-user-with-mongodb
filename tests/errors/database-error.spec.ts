import { DatabaseError } from "../../src/errors";

describe("Test Database Error", () => {
  test("Should test database exception", () => {
    expect(() => {
      throw new DatabaseError();
    }).toThrow(DatabaseError);
  });
});
