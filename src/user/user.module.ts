import {Module} from "@nestjs/common";

import {UserResolver} from "./user.resolver";
import {UserController} from "./user.controller";

@Module({
  providers: [UserResolver],
  controllers: [UserController],
})
export class UserModule {}
