export class DatabaseError extends Error {
  constructor(paramName: String) {
    super(`Database not connected: ${paramName}`);
    this.name = "DatabaseError";
  }
}
