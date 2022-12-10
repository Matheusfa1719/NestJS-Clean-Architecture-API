import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGcemDto, UpdateGcemDto } from '../core/dtos';
import { GcemUseCases } from '../use-cases/gcem/gcem.use-case';

@ApiTags('Gcem')
@Controller('api/gcem')
export class GcemController {
  constructor(private gcemUseCases: GcemUseCases) {}

  @Get()
  async getAll() {
    return this.gcemUseCases.getAllGcems();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.gcemUseCases.getGcemById(id);
  }

  @Post()
  createAuthor(@Body() authorDto: CreateGcemDto) {
    return this.gcemUseCases.createGcem(authorDto);
  }

  @Put(':id')
  updateAuthor(@Param('id') id: string, @Body() updateGcemDto: UpdateGcemDto) {
    return this.gcemUseCases.updateGcem(id, updateGcemDto);
  }
}
