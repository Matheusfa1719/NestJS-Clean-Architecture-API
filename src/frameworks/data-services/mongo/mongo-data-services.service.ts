import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Gcem, GcemDocument, User, UserDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoGenericRepository<User>;
  gcems: MongoGenericRepository<Gcem>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Gcem.name)
    private GcemRepository: Model<GcemDocument>,
  ) {}
  //Olhar exemplo para casar os dados
  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.gcems = new MongoGenericRepository<Gcem>(this.GcemRepository); //Casar gcem com user para ver quem é o lider
  }
}
