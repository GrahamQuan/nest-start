import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Logger2Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('logger2');
    next();
  }
}
