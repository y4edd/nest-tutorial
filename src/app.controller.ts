import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// コントローラーはクライアントからのリクエストを処理し、適切なレスポンスを返します
// ルーティングを担当するコントローラです。
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
