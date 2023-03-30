import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../user.service';

@Injectable()
export class UserExistMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const user = this.userService.findByEmail(email);

    if (user) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    next();
  }
}
