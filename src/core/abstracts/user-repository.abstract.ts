export abstract class IGenericUserRepository<User> {
  abstract getAll(): Promise<User[]>;

  abstract get(id: string): Promise<User>;

  abstract create(item: User): Promise<User>;

  abstract update(id: string, item: User);

  abstract findUserByEmail(email: string): Promise<User>;
}
