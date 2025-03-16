import { Injectable } from '@nestjs/common';

// ビジネスロジックを実装するサービス
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
