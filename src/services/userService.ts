import UserRepository from "../repositories/userRepository";
import { IUserRepository, IUserService, User } from "../interfaces";

export default class UserService implements IUserService {
  private _userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  public async getUser(userId: string): Promise<User> {
    return this._userRepository.getUser(userId);
  }

  public async getUsers(userIds?: string[]): Promise<User[]> {
    return this._userRepository.getUsers(userIds);
  }

  public async createUser(user: User): Promise<User> {
    return this._userRepository.createUser(user);
  }

  public async updateUser(userId: string, user: User): Promise<User> {
    return this._userRepository.updateUser(userId, user);
  }

  public async deleteUser(userId: string): Promise<User> {
    return this._userRepository.deleteUser(userId);
  }
}
