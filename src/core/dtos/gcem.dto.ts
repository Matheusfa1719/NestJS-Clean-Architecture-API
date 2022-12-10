import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGcemDto {
  @ApiProperty({ description: 'Nome do gcem', type: 'string' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Dia da reunião', type: 'string' })
  @IsString()
  @IsNotEmpty()
  meetingDay: string;

  @ApiProperty({ description: 'Horário da reunião', type: 'string' })
  @IsString()
  @IsNotEmpty()
  meetingTime: string;

  @ApiProperty({ description: 'Id do Lider', type: 'string' })
  @IsNotEmpty()
  leader: any;
}

export class UpdateGcemDto extends PartialType(CreateGcemDto) {}
