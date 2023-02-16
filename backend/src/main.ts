import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import * as path from 'path'
import { request } from 'http';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(express.static(path.join(__dirname, '..', 'public')));
  await app.listen(3000);
}
bootstrap();
