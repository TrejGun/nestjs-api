import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";

import {UserModule} from "./user/user.module";
import {GqlConfigService} from "./graphql.options";

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    UserModule,
  ],
})
export class ApplicationModule {}
