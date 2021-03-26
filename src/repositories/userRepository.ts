import { Types } from "mongoose";

import UserModel from "../models/user";
import { IUserRepository, User } from "../interfaces/";

export default class UserRepository implements IUserRepository {
  public async getUser(userId: string): Promise<User> {
    return UserModel.findOne({
      _id: userId,
    });
  }

  public async getUsers(userIds?: string[]): Promise<User[]> {
    return UserModel.find({
      _id: {
        $in: userIds,
      },
    });
  }

  public async createUser(user: User): Promise<User> {
    return UserModel.create(user);
  }

  public async updateUser(userId: string, user: User): Promise<User> {
    return UserModel.findByIdAndUpdate(userId, user);
  }

  public async deleteUser(userId: string): Promise<User> {
    return UserModel.findByIdAndDelete({ _id: userId });
  }
}
