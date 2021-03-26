import { IUserRepository, IUserService, User } from "../interfaces";

class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async getUser(userId: string): Promise<User> {
    return this.userRepository.getUser(userId);
  }
}
