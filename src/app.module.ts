import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// アプリケーションのルートモジュールを定義します
//  どこで宣言されているコントローラ・サービスを使うのかを定義する
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
