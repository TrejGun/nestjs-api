import {Controller, Get, NotFoundException, Param} from "@nestjs/common";
import {from, Observable, of} from "rxjs";
import {toArray} from "rxjs/operators";

import {IUser} from "./interfaces";
import {UserService} from "./user.service";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/promise")
  public listUsersAsPromise(): Promise<Array<IUser>> {
    const users = this.userService.getList();
    return Promise.resolve(users);
  }

  @Get("/observable")
  public listUsersAsObservable(): Observable<Array<IUser>> {
    const users = this.userService.getList();
    return from(users).pipe(toArray());
  }

  @Get("/promise/:id")
  public getByIdAsPromise(@Param("id") id: number): Promise<IUser> {
    const users = this.userService.getList();
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return Promise.resolve(user);
  }

  @Get("/observable/:id")
  public getByIdAsObservable(@Param("id") id: number): Observable<IUser> {
    const users = this.userService.getList();
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return of(user);
  }
}
