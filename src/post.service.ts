import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async posts() {
    return this.prisma.post.findMany({
      include: {
        author: true,
      },
      orderBy: {
        created_at: 'desc'
      },
    });
  }
}