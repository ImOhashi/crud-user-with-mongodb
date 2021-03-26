import { model, Model, Schema } from "mongoose";

import { IUser } from "../interfaces";

const UserSchema: Schema = new Schema({
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
});

const User: Model<IUser> = model("User", UserSchema);

export default User;
