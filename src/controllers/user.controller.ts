import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateUserDto, LoginDto, UpdateUserDto } from '../core/dtos';
import { UserUseCases } from '../use-cases/user/user.use-case';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.userUseCases.login(loginDto);
  }

  @Get()
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userUseCases.createUser(userDto);
  }

  @Put(':id')
  updateAuthor(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userUseCases.updateUser(id, updateUserDto);
  }
}
