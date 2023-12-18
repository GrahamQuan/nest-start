import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [UserModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
