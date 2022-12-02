import { Model } from 'mongoose';
import { IGenericUserRepository } from '../../../core/abstracts/user-repository.abstract';
import { User } from './model';

export class MongoUserRepository implements IGenericUserRepository<User> {
  private _repository: Model<User>;
  private _populateOnFind: string[];

  constructor(repository: Model<User>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<User[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<User> {
    return this._repository.findById(id).exec();
  }

  create(item: User): Promise<User> {
    return this._repository.create(item);
  }

  update(id: string, item: User) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  findUserByEmail(email: string): Promise<User> {
    return this._repository.findOne({ email }).exec();
  }
}
