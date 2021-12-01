import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //server wacht op inkomende requests op port 300
  await app.listen(3000);
}
bootstrap();
