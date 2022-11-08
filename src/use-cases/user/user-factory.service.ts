import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos/user.dto';
import { User } from 'src/core/entities';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    newUser.role = createUserDto.role;

    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.firstName = updateUserDto.firstName;
    newUser.lastName = updateUserDto.lastName;
    newUser.email = updateUserDto.email;
    newUser.password = updateUserDto.password;
    newUser.role = updateUserDto.role;

    return newUser;
  }
}
