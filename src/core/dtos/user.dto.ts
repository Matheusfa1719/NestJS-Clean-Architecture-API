import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRoles } from '../enums';

export class CreateUserDto {
  @ApiProperty({ description: 'Primeiro nome', type: 'string' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'Sobrenome', type: 'string' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'Email', type: 'string' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'senha', type: 'string' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'Função do usuário', enum: UserRoles })
  @IsEnum(UserRoles)
  @IsNotEmpty()
  role: UserRoles;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class LoginDto {
  @ApiProperty({ description: 'Email', type: 'string' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'senha', type: 'string' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
