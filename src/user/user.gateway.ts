import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from "@nestjs/websockets";
import {from, Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Server} from "socket.io";

import {UserService} from "./user.service";
import {IUser} from "./interfaces";
import {NotFoundException} from "@nestjs/common";

@WebSocketGateway()
export class UserGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly userService: UserService) {}

  @SubscribeMessage("listUsersAsVoid")
  public listUsersAsVoid(): void {
    const users = this.userService.getList();
    users.forEach(user => {
      this.server.emit("listUsersAsVoid", user);
    });
  }

  @SubscribeMessage("listUsersAsPromise")
  public listUsersAsPromise(): Promise<Array<IUser>> {
    const users = this.userService.getList();
    return Promise.resolve(users);
  }

  @SubscribeMessage("getByIdAsPromise")
  public getByIdAsPromise(@MessageBody("id") id: number): Promise<IUser> {
    const users = this.userService.getList();
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return Promise.resolve(user);
  }

  @SubscribeMessage("listUsersAsObservable")
  public listUsersAsObservable(): Observable<WsResponse<IUser>> {
    const users = this.userService.getList();
    return from(users).pipe(map(user => ({event: "listUsersAsObservable", data: user})));
  }

  @SubscribeMessage("getByIdAsObservable")
  public getByIdAsObservable(@MessageBody("id") id: number): Observable<WsResponse<IUser>> {
    const users = this.userService.getList();
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return of(user).pipe(map(user => ({event: "getByIdAsObservable", data: user})));
  }
}
