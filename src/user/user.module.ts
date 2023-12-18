import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LogMiddleware } from './middleware/log/log.middleware';
import { Logger2Middleware } from './middleware/logger2/logger2.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes('user')
      .apply(Logger2Middleware)
      .forRoutes('user');
  }
}
