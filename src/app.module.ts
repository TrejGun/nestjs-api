import {Module} from "@nestjs/common";
import {GqlModuleOptions, GraphQLModule} from "@nestjs/graphql";
import {ConfigModule, ConfigService} from "@nestjs/config";

import {UserModule} from "./user/user.module";
import {APP_PIPE} from "@nestjs/core";
import {HttpValidationPipe} from "./common/pipes/validation.http";
import {Request, Response} from "express";

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: HttpValidationPipe,
    },
  ],
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): GqlModuleOptions => {
        const nodeEnv = configService.get<string>("NODE_ENV", "development");
        return {
          debug: nodeEnv !== "production",
          // playground: nodeEnv !== "production",
          context: ({req, res}: {req: Request; res: Response}): any => ({req, res}),
          autoSchemaFile: "./schema.gql",
        };
      },
    }),
    UserModule,
  ],
})
export class ApplicationModule {}
