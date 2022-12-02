import { Gcem, User } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';
import { IGenericUserRepository } from './user-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericUserRepository<User>;
  abstract gcems: IGenericRepository<Gcem>;
}
