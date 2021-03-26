import { Document } from "mongoose";

export interface IUser extends Document {
  name: String,
  email: String,
  password: String
}