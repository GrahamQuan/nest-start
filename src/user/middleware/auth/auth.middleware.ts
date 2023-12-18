import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException('No authorization', HttpStatus.FORBIDDEN);
    }
    const token = authorization.split(' ')[1];
    if (token !== 'nestjs') {
      throw new HttpException('No authorization', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
