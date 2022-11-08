import { Gcem, User } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract gcems: IGenericRepository<Gcem>;
}
