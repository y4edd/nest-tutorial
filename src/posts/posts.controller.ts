import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // ハンドラーメソッドとよばれる
  // エンドポイント（/posts）に対しGETやPOSTといったリクエストが来たら、
  // それぞれ対応するServiceで宣言され、関数化されているロジックを呼び出す
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }

  // パラメター。対応させるように
  @Get(':id')
  findById(@Param('id') id: string): PostType {
    return this.postsService.findById(id);
  }
}
