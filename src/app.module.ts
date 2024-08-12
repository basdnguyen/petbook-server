import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { PostService } from './post.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, PostService],
})
export class AppModule {}
