import mongoose from "mongoose";

import { Logger } from "../helpers";
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
          Logger.info("Database is connected");
        }
      }
    );
  }
}

export default new Connect();
