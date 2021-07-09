import {Injectable} from "@nestjs/common";

import {IUser, UserRole} from "./interfaces";

@Injectable()
export class UserService {
  public getList(): Array<IUser> {
    return [
      {
        id: 1,
        email: "trejgun+test1@gmail.com",
        password: "qwerty",
        roles: [UserRole.User],
      },
      {
        id: 2,
        email: "trejgun+test2@gmail.com",
        password: "qwerty",
        roles: [UserRole.User],
      },
      {
        id: 3,
        email: "trejgun+test3@gmail.com",
        password: "qwerty",
        roles: [UserRole.User],
      },
    ];
  }
}
