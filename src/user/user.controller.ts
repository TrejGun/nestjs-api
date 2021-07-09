import {Controller, Get} from "@nestjs/common";
import {from, Observable} from "rxjs";

import {IUser, UserRole} from "./interfaces";

const users = [
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

@Controller("/users")
export class UserController {
  @Get("/")
  public listUsersAsObservable(): Observable<IUser> {
    return from(users);
  }
}
