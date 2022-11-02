import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts/data-services.abstract';
import { CreateGcemDto, UpdateGcemDto } from 'src/core/dtos';
import { Gcem } from '../../core/entities';
import { GcemFactoryService } from './author-factory.service';

@Injectable()
export class GcemUseCases {
  constructor(
    private dataServices: IDataServices,
    private gcemFactoryService: GcemFactoryService,
  ) {}

  getAllGcems(): Promise<Gcem[]> {
    return this.dataServices.gcems.getAll();
  }

  getGcemById(id: string): Promise<Gcem> {
    return this.dataServices.gcems.get(id);
  }

  createGcem(createGcemDto: CreateGcemDto): Promise<Gcem> {
    const gcem = this.gcemFactoryService.createNewGcem(createGcemDto);
    return this.dataServices.gcems.create(gcem);
  }

  updateGcem(id: string, updateGcemDto: UpdateGcemDto): Promise<Gcem> {
    const gcem = this.gcemFactoryService.updateGcem(updateGcemDto);
    return this.dataServices.gcems.update(id, gcem);
  }
}
