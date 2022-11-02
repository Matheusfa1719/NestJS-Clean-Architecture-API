import { Injectable } from '@nestjs/common';
import { Gcem } from '../../core/entities';
import { CreateGcemDto, UpdateGcemDto } from '../../core/dtos';

@Injectable()
export class GcemFactoryService {
  createNewGcem(createGcemDto: CreateGcemDto) {
    const newGcem = new Gcem();
    newGcem.name = createGcemDto.name;
    newGcem.meetingDay = createGcemDto.meetingDay;
    newGcem.meetingTime = createGcemDto.meetingTime;

    return newGcem;
  }

  updateGcem(updateGcemDto: UpdateGcemDto) {
    const newGcem = new Gcem();
    newGcem.name = updateGcemDto.name;
    newGcem.meetingDay = updateGcemDto.meetingDay;
    newGcem.meetingTime = updateGcemDto.meetingTime;

    return newGcem;
  }
}
