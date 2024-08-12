import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller()
export class AppController {
  constructor(private readonly postService: PostService) {}

  @Get()
  home() {
    return 'Hello world';
  }

  @Get('posts')
  async getPosts() {
    return this.postService.posts();
  }
}
