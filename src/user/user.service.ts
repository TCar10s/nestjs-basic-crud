import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from './interfaces/user';

@Injectable()
export class UserService {
  users: IUser[] = [
    {
      id: 'd566a79e-d23b-4043-ae42-171ff2877650',
      name: 'John Doe',
      email: 'john@mail.com',
    },
    {
      id: 'bbe573d0-821f-4fa7-94e3-4420d4634929',
      name: 'Carlos',
      email: 'carlos@mail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const id = uuidv4();
    const user = {
      id,
      ...createUserDto,
    };

    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  update(updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === updateUserDto.id);

    if (user) {
      user.name = updateUserDto.name;
      user.email = updateUserDto.email;
    }

    return user;
  }

  remove(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }

  findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
}
