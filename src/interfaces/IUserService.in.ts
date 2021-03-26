import { User } from "./User.in";

export interface IUserService {
  getUser(userId: string): Promise<User>;
}
