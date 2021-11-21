import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const devPort = 3000;
  const devHost = "localhost";

  const serverPort = process.env.PORT || devPort || 80;
  const serverHost = "0.0.0.0" || devHost;

  //await app.listen(process.env.PORT || 3000);

  await app.listen(serverPort, () => {
    console.log(`Serving`);
  });
}
bootstrap();
