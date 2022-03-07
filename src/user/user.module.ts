import { Module } from "@nestjs/common";

import { UserResolver } from "./user.resolver";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserGateway } from "./user.gateway";

@Module({
  providers: [UserResolver, UserService, UserGateway],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
