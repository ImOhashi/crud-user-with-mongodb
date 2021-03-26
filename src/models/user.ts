import { model, Model, Schema } from "mongoose";

import { User } from "../interfaces";

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    collection: "users",
    id: false,
  }
);

const UserModel: Model<User> = model("User", UserSchema);

export default UserModel;
