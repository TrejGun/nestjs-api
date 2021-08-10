import {Module} from "@nestjs/common";
import {GqlModuleOptions, GraphQLModule} from "@nestjs/graphql";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {ServeStaticModule} from "@nestjs/serve-static";

import {UserModule} from "./user/user.module";
import {APP_PIPE} from "@nestjs/core";
import {HttpValidationPipe} from "./common/pipes/validation.http";
import {Request, Response} from "express";
import {join} from "path";

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
          playground: nodeEnv !== "production",
          context: ({req, res}: {req: Request; res: Response}): any => ({req, res}),
          autoSchemaFile: "./schema.gql",
        };
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    UserModule,
  ],
})
export class ApplicationModule {}
