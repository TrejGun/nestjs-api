import { NestFactory } from "@nestjs/core";

import { ApplicationModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);

  const configService = app.get(ConfigService);

  const host = configService.get<string>("HOST", "localhost");
  const port = configService.get<number>("PORT", 3000);

  await app.listen(port, host, () => {
    console.info(`API server is running on http://${host}:${port}`);
  });
}

void bootstrap();
