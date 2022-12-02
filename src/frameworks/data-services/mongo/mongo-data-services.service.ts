import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Gcem, GcemDocument, User, UserDocument } from './model';
import { MongoUserRepository } from './mongo-user-generic.repository';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoUserRepository;
  gcems: MongoGenericRepository<Gcem>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Gcem.name)
    private GcemRepository: Model<GcemDocument>,
  ) {}
  //Olhar exemplo para casar os dados
  onApplicationBootstrap() {
    this.users = new MongoUserRepository(this.UserRepository);
    this.gcems = new MongoGenericRepository<Gcem>(this.GcemRepository, [
      'User',
    ]);
  }
}
