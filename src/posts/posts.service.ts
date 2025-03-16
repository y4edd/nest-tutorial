import { Injectable } from '@nestjs/common';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
  // このクラスの中でしか使えないように。
  // 疎結合
  private readonly posts: PostType[] = [];

  findAll(): PostType[] {
    return this.posts;
  }

  create(post: PostType) {
    this.posts.push(post);
  }
}
