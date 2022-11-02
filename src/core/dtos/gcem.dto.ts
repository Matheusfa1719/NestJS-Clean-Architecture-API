import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateGcemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  meetingDay: string;

  @IsString()
  @IsNotEmpty()
  meetingTime: string;
}

export class UpdateGcemDto extends PartialType(CreateGcemDto) {}
