import { Document } from "mongoose";

export interface User {
  name: String;
  email: String;
  password: String;
}

export interface UserDocument extends User, Document {}
