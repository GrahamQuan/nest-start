import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    const token = request.headers.authorization.split(' ')[1];
    if (!token) {
      throw new HttpException('Invalid Authentication', HttpStatus.FORBIDDEN);
    }
    if (token !== 'nestjs') {
      throw new HttpException('Invalid Authorization', HttpStatus.FORBIDDEN);
    }
    return true;
  }
}
