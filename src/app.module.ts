import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'
import { TweetModule } from './tweet/tweet.module';
import { RandomModule } from './random/random.module';

@Module({
  imports: [UsersModule, TweetModule, RandomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
