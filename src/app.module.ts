import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { Request, Response } from "express";
import { join } from "path";

import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const nodeEnv = configService.get<string>("NODE_ENV", "development");
        return {
          debug: nodeEnv !== "production",
          playground: nodeEnv !== "production",
          context: ({ req, res }: { req: Request; res: Response }): any => ({ req, res }),
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
