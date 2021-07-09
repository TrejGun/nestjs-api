import {Module} from "@nestjs/common";

import {UserResolver} from "./user.resolver";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";

@Module({
  providers: [UserResolver, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
