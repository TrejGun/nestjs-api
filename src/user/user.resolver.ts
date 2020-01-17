import {from, Observable, of} from "rxjs";
import {toArray} from "rxjs/operators";
import {Args, Query, Resolver} from "@nestjs/graphql";
import {NotFoundException} from "@nestjs/common";
import {Int} from "type-graphql";

import {UserType} from "./types";
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

@Resolver()
export class UserResolver {
  @Query(_returns => UserType)
  public getById(@Args({name: "id", type: () => Int}) id: number): Observable<IUser> {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return of(user);
  }

  @Query(_returns => [UserType])
  public listUsersAsPromise(): Promise<Array<IUser>> {
    return from(users)
      .pipe(toArray())
      .toPromise();
  }

  @Query(_returns => [UserType])
  public listUsersAsObservable(): Observable<IUser> {
    return from(users);
  }
}
