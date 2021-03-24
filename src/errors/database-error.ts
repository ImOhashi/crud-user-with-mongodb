import { NativeError } from "mongoose";

export class DatabaseError extends Error {
  constructor(paramName: NativeError) {
    super(`Database not connected: ${paramName}`);
    this.name = "DatabaseError";
  }
}
