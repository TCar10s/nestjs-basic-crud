import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserExistMiddleware } from './middlewares/user-exist';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserExistMiddleware).forRoutes({
      path: 'user',
      method: RequestMethod.POST,
    });
  }
}
