import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: '🚀 Welcome to backend of tkhwang-toy-architecture !' };
  }
}
