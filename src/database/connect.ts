import mongoose from "mongoose";

import { DatabaseError } from "../errors/";

class Connect {
  private host: string;
  private port: string;
  private user: string;
  private pass: string;
  private collection: string;

  constructor() {
    this.host = process.env.MONGO_HOST;
    this.port = process.env.MONGO_PORT;
    this.user = process.env.MONGO_USER;
    this.pass = process.env.MONGO_PASS;
    this.collection = process.env.MONGO_COLLECTION;
  }

  public connect(): void {
    mongoose.connect(
      `mongodb://${this.host}:${this.port}`,
      {
        user: this.user,
        pass: this.pass,
        dbName: this.collection,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          throw new DatabaseError(err);
        } else {
          console.log("Database is connected");
        }
      }
    );
  }
}

export default new Connect().connect;
