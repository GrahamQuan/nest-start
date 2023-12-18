import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LogMiddleware } from './middleware/log/log.middleware';
import { AuthMiddleware } from './middleware/auth/auth.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes('user')
      .apply(AuthMiddleware)
      .forRoutes('user');
  }
}
