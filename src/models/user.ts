import { model, Model, Schema } from "mongoose";

import { UserDocument } from "../interfaces";

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

const UserModel: Model<UserDocument> = model("UserModel", UserSchema);

export default UserModel;
