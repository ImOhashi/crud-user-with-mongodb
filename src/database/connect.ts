import mongoose from "mongoose";

import { DatabaseError } from "../errors/";

class Connect {
  public connect(): void {
    mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
      {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        dbName: process.env.MONGO_COLLECTION,
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

  public closeConnection(): void {
    mongoose.disconnect();
  }
}

export default new Connect();
