import sinon from "sinon";

import UserModel from "../../src/models/user";
import UserRepository from "../../src/repositories/userRepository";
import { userMock, toUpdateMock } from "./mock/";

describe("Tests userRepository", () => {
  let sandbox;

  const userRepository = new UserRepository();

  beforeAll(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(UserModel, "findOne").callsFake(() => {
      return userMock;
    });

    sandbox.stub(UserModel, "find").callsFake(() => {
      return [userMock];
    });

    sandbox.stub(UserModel, "create").callsFake(() => {
      return userMock;
    });

    sandbox.stub(UserModel, "findByIdAndUpdate").callsFake(() => {
      return toUpdateMock;
    });

    sandbox.stub(UserModel, "findByIdAndDelete").callsFake(() => {
      return userMock;
    });
  });

  afterAll(() => {
    sandbox.restore();
  });

  test("Should return a user", async () => {
    const user = await userRepository.getUser("teste");
    expect(user).toEqual(userMock);
  });

  test("Should return a array of users", async () => {
    const arrayUsers = await userRepository.getUsers(["teste"]);
    expect(arrayUsers).toEqual([userMock]);
  });

  test("Should create a new user", async () => {
    const newUser = await userRepository.createUser(userMock);
    expect(newUser).toEqual(userMock);
  });

  test("Should update a new user", async () => {
    const updatedUser = await userRepository.updateUser("teste", toUpdateMock);
    expect(updatedUser).toEqual(toUpdateMock);
  });

  test("Should delete a user", async () => {
    const deletedUser = await userRepository.deleteUser("teste");
    expect(deletedUser).toEqual(userMock);
  });
});
