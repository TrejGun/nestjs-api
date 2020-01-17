import "./env";
import {NestFactory} from "@nestjs/core";

import {ApplicationModule} from "./app.module";


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);

  await app.listen(process.env.PORT, process.env.HOST, () => {
    // eslint-disable-next-line no-console
    console.info(`Express server is running on http://${process.env.HOST}:${process.env.PORT}/`);

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info(`GraphQL playground is at http://${process.env.HOST}:${process.env.PORT}/graphql`);
    }
  });
}

bootstrap();
