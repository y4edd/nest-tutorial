import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// アプリケーションのエントリーポイントです
// appModuleの根幹をクリエイトしてくれる。Next.jsのアプリケーションを3000番で建てることを考え5000番にしておく
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
