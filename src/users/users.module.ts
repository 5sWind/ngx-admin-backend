import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';
import { UsersController } from './users.controller';
import { UserSubscriber } from './user.subscriber';

@Module({
  providers: [UsersService, UserSubscriber],
  exports: [UsersService, TypeOrmModule],
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
})
export class UsersModule { }