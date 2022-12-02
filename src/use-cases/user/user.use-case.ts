import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateUserDto, LoginDto, UpdateUserDto } from '../../core/dtos';
import { UserFactoryService } from './user-factory.service';
import { HashingService } from '../../services/hashing/hashing.service';
import { AuthService } from '../../services/authentication/authentication.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
    private hashingService: HashingService,
    private authService: AuthService,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.dataServices.users.getAll();
  }

  getUserById(id: any): Promise<User> {
    return this.dataServices.users.get(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    user.password = await this.hashingService.hash(user.password);
    return this.dataServices.users.create(user);
  }

  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }

  async login(loginDto: LoginDto) {
    const user = await this.dataServices.users.findUserByEmail(loginDto.email);
    if (!user) {
      throw new HttpException('User Not found', HttpStatus.NOT_FOUND);
    }
    const isValidPassword = await this.hashingService.compare(
      loginDto.password,
      user.password,
    );
    if (!isValidPassword) {
      throw new HttpException('Invalid Password', HttpStatus.FORBIDDEN);
    }
    delete user.password;
    return this.authService.login({ ...user });
  }
}
