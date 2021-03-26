import { NativeError } from "mongoose";

export class DatabaseError extends Error {
  constructor(paramName?: NativeError) {
    super(`Database not is connected\n ${paramName}`);
    this.name = "DatabaseError";
  }
}
