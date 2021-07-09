import {from, Observable, of, firstValueFrom} from "rxjs";
import {toArray} from "rxjs/operators";
import {Args, Int, Query, Resolver} from "@nestjs/graphql";
import {NotFoundException} from "@nestjs/common";

import {UserType} from "./types";
import {IUser} from "./interfaces";
import {UserService} from "./user.service";

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserType])
  public listUsersAsPromise(): Promise<Array<IUser>> {
    const users = this.userService.getList();
    return firstValueFrom(from(users).pipe(toArray()));
  }

  @Query(() => [UserType])
  public listUsersAsObservable(): Observable<Array<IUser>> {
    const users = this.userService.getList();
    return from(users).pipe(toArray());
  }

  @Query(() => UserType)
  public getByIdAsPromise(@Args({name: "id", type: () => Int}) id: number): Promise<IUser> {
    const users = this.userService.getList();
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return Promise.resolve(user);
  }

  @Query(() => UserType)
  public getByIdAsObservable(@Args({name: "id", type: () => Int}) id: number): Observable<IUser> {
    const users = this.userService.getList();
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return of(user);
  }
}
