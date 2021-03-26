import { IUserRepository, IUserService, User } from "../interfaces";

export default class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async getUser(userId: string): Promise<User> {
    return this.userRepository.getUser(userId);
  }

  public async getUsers(userIds?: string[]): Promise<User[]> {
    return this.userRepository.getUsers(userIds);
  }

  public async createUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }

  public async updateUser(userId: string, user: User): Promise<User> {
    return this.userRepository.updateUser(userId, user);
  }

  public async deleteUser(userId: string): Promise<User> {
    return this.userRepository.deleteUser(userId);
  }
}
