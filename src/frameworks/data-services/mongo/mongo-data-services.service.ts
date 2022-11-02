import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Gcem, GcemDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  gcems: MongoGenericRepository<Gcem>;

  constructor(
    @InjectModel(Gcem.name)
    private GcemRepository: Model<GcemDocument>,
  ) {}
  //Olhar exemplo para casar os dados
  onApplicationBootstrap() {
    this.gcems = new MongoGenericRepository<Gcem>(this.GcemRepository);
  }
}
