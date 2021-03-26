import { User } from "./User.in";

export interface IUserRepository {
  getUser(userId: string): Promise<User>;
  getUsers(userIds: string[]): Promise<User[]>;
  createUser(user: User): Promise<User>;
  updateUser(userId: string, user: User): Promise<User>;
  deleteUser(userId: string): Promise<User>;
}
