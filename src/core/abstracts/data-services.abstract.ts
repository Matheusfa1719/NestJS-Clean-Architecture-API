import { Gcem } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract gcems: IGenericRepository<Gcem>;
}
