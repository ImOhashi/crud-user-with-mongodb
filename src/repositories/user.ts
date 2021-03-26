import { Types } from "mongoose";

import UserModel from "../models/user";
import { User } from "../interfaces/";

export default class UserRepository {
  public async getUser(userId: string): Promise<User> {
    return UserModel.findOne({
      _id: Types.ObjectId(userId),
    }).lean();
  }

  public async getUsers(userIds: string[]): Promise<User[]> {
    const newUserIds: Types.ObjectId[] = userIds.map((userId) =>
      Types.ObjectId(userId)
    );

    return UserModel.find({
      _id: {
        $in: newUserIds,
      },
    }).lean();
  }

  public async createUser(user: User): Promise<User> {
    return new UserModel(user).save();
  }

  public async updateUser(userId: string, user: User): Promise<User> {
    return UserModel.findByIdAndUpdate(userId, user);
  }

  public async deleteUser(userId: string): Promise<User> {
    return UserModel.findByIdAndDelete({ _id: Types.ObjectId(userId) });
  }
}
